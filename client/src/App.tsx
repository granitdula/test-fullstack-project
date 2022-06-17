import React from 'react';
import './App.css';
import DisplayTable from './components/display-table/DisplayTable';
import InputCard from './components/input-card/InputCard';
import { CarResponseData } from './types/ApiResponse';

type AppState = {
    carData: CarResponseData;
};

export default class App extends React.Component<unknown, AppState> {
    constructor(props: unknown) {
        super(props);
        this.state = { carData: [] };
    }

    private updateAllCarData = (carData: CarResponseData): void => {
        this.setState({ carData });
    };

    render() {
        return (
            <div>
                <InputCard updateAllCarData={this.updateAllCarData} />
                {this.state.carData.length > 0 ? (
                    <DisplayTable carData={this.state.carData} />
                ) : (
                    <h2 style={{ width: '35.5em', marginLeft: 'auto', marginRight: 'auto' }}>No Data Shown</h2>
                )}
            </div>
        );
    }
}
