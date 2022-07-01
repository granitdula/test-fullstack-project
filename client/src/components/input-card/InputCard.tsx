import './InputCard.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Stack } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { CarResponseData } from '../../types/ApiResponse';
import CarDataService from '../../services/CarDataService';
import axios from 'axios';
import { CarPostBody } from '../../types/ApiBodies';

export default class InputCard extends React.Component<
    { updateAllCarData: (carData: CarResponseData) => void },
    CarPostBody
> {
    private carDataService: CarDataService;

    constructor(props: { updateAllCarData: (carData: CarResponseData) => void }) {
        super(props);
        this.state = {
            make: '',
            model: '',
            year: '',
            colour: '',
            mileage: '',
        };
        this.carDataService = new CarDataService(axios.create());
    }

    private onAddCarButtonPress = async (): Promise<void> => {
        for (const key in this.state) {
            const keyProperty = key as keyof typeof this.state;
            if (typeof this.state[keyProperty] !== 'string' || this.state[keyProperty].length === 0) {
                console.log('Error: There are fields with missing inputs.');
                return;
            }
        }

        this.carDataService.postCar(this.state);
    };

    private onShowCarButtonPress = async (): Promise<void> => {
        const carData = await this.carDataService.getAllCars();
        this.props.updateAllCarData(carData);
    };

    private onMakeInputFieldChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        this.setState({ make: value });
    };

    private onModelInputFieldChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        this.setState({ model: value });
    };

    private onYearInputFieldChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        this.setState({ year: value });
    };

    private onColourInputFieldChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        this.setState({ colour: value });
    };

    private onMileageInputFieldChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        this.setState({ mileage: value });
    };

    render() {
        return (
            <Container fixed maxWidth="md">
                <h1>Car Data Manager</h1>
                <Stack spacing={2}>
                    <TextField
                        id="car-make-text-field"
                        name="make"
                        label="Make"
                        variant="filled"
                        value={this.state.make}
                        onChange={this.onMakeInputFieldChange}
                    />
                    <TextField
                        id="car-model-text-field"
                        name="model"
                        label="Model"
                        variant="filled"
                        value={this.state.model}
                        onChange={this.onModelInputFieldChange}
                    />
                    <TextField
                        id="car-year-text-field"
                        name="year"
                        label="Year"
                        variant="filled"
                        value={this.state.year}
                        onChange={this.onYearInputFieldChange}
                    />
                    <TextField
                        id="car-colour-text-field"
                        name="colour"
                        label="Colour"
                        variant="filled"
                        value={this.state.colour}
                        onChange={this.onColourInputFieldChange}
                    />
                    <TextField
                        id="car-mileage-text-field"
                        name="mileage"
                        label="Mileage"
                        variant="filled"
                        value={this.state.mileage}
                        onChange={this.onMileageInputFieldChange}
                    />
                </Stack>
                <Stack direction="row" spacing={2} mt={2}>
                    <Button variant="contained" color="success" onClick={this.onAddCarButtonPress}>
                        Add Car
                    </Button>
                    <Button variant="contained" onClick={this.onShowCarButtonPress}>
                        Show Cars
                    </Button>
                </Stack>
            </Container>
        );
    }
}
