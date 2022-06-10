import React from 'react';
import './App.css';
import DisplayTable from './components/display-table/DisplayTable';
import InputCard from './components/input-card/InputCard';
import { CarResponseData } from './types/ApiResponse';

export default class App extends React.Component {
    render() {
        const carData: CarResponseData = [
            {
                make: 'Volkswagen',
                model: 'Golf V',
                year: new Date(2010, 1),
                colour: 'Silver',
                mileage: 100000,
            },
            {
                make: 'Pegeot',
                model: '208',
                year: new Date(2019, 1),
                colour: 'Red',
                mileage: 20000,
            },
            {
                make: 'Mercedes-Benz',
                model: 'C-class',
                year: new Date(2015, 1),
                colour: 'Black',
                mileage: 70000,
            },
        ];

        return (
            <div>
                <InputCard />
                <DisplayTable carData={carData} />
            </div>
        );
    }
}
