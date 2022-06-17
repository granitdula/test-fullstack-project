import './InputCard.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Stack } from '@mui/material';
import React from 'react';
import { CarResponseData } from '../../types/ApiResponse';
import CarDataService from '../../services/CarDataService';
import axios from 'axios';

export default class InputCard extends React.Component<
    { updateAllCarData: (carData: CarResponseData) => void },
    unknown
> {
    private carDataService: CarDataService;

    constructor(props: { updateAllCarData: (carData: CarResponseData) => void }) {
        super(props);
        this.carDataService = new CarDataService(axios.create());
    }

    private onShowCarButtonPress = async () => {
        const carData = await this.carDataService.getAllCars();
        this.props.updateAllCarData(carData);
    };

    render() {
        return (
            <Container fixed maxWidth="md">
                <h1>Car Data Manager</h1>
                <Stack spacing={2}>
                    <TextField id="car-make-text-field" label="Make" variant="filled" />
                    <TextField id="car-model-text-field" label="Model" variant="filled" />
                    <TextField id="car-year-text-field" label="Year" variant="filled" />
                    <TextField id="car-colour-text-field" label="Colour" variant="filled" />
                    <TextField id="car-mileage-text-field" label="Mileage" variant="filled" />
                </Stack>
                <Stack direction="row" spacing={2} mt={2}>
                    <Button variant="contained" color="success">
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
