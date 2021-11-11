import { RESTAURANTS } from '../shared/restaurants';
import { MENUS } from '../shared/menus';

export const initialState = {
    restaurants: RESTAURANTS,
    menus: MENUS
};

export const Reducer = (state = initialState, action) => {
    return state;
};