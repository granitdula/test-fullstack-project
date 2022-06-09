import './InputCard.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, Stack } from '@mui/material';
import React from 'react';

export default class InputCard extends React.Component {
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
                    <Button variant="contained">Show Cars</Button>
                </Stack>
            </Container>
        );
    }
}
