import { requests } from '../services/apiService';

const requestGetFuel = 'REQUEST_GET_FUEL';
const receiveGetFuel = 'RECEIVE_GET_FUEL';
const initialState = { fuelIcons: [], isLoading: false };

export const actionCreators = {
    requestGet: () => async (dispatch) => {
        dispatch({ type: requestGetFuel });

        const url = '/fuel';
        const response = await requests.doGet(url);

        const fuelIcons = await response;
        dispatch({ type: receiveGetFuel, fuelIcons });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestGetFuel) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveGetFuel) {
        return {
            ...state,
            fuelIcons: action.fuelIcons,
            isLoading: false
        };
    }

    return state;
};