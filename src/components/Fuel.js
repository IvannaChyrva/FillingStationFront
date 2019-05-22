import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Fuel';

class Fuel extends Component {
    componentDidMount() {
        this.props.requestGet();
    }

    render() {
        return (
            <div>
                <h1>Fuel prices</h1>
                <p>We have prices for 83%* of petrol stations nationwide</p>
                {renderFuelTable(this.props)}
            </div>
        );
    }
}

function renderFuelTable(props) {
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Fuel</th>
                    <th>Price</th>
                </tr>
            </thead>
            {props.isLoading ?
                (
                    <tbody>
                        <td>Loading...</td>
                        <td>Loading...</td>
                    </tbody>
                )
                :
                (
                    <tbody>
                        {props.fuelIcons.map(fuelIcons =>
                            <tr key={fuelIcons.FuelId}>
                                <td>{fuelIcons.FuelType}</td>
                                <td>{fuelIcons.FuelPrice}</td>
                            </tr>
                        )}
                    </tbody>
                )
                    }
        </table>
    );
}

export default connect(
    state => state.fuel,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Fuel);
