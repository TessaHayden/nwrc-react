import { RESTAURANTS } from '../shared/restaurants';
import { MENUS } from '../shared/menus';
import { SERVICES } from '../shared/services';
import { RESTAURANTSFL } from '../shared/restaurantFlatlist'

export const initialState = {
    restaurants: RESTAURANTS,
    menus: MENUS,
    services: SERVICES,
    restaurantsfl: RESTAURANTSFL
};

export const Reducer = (state = initialState, action) => {
    return state;
};