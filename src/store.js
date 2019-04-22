import {createStore} from 'redux';

const initialState = {
	recipeName: "",
	recipeCategory: "",
	firstName: "",
	lastName: "",
	ingredientsList: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRST = "UPDATE_FIRST";
export const UPDATE_LAST = "UPDATE_LAST";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";

function reducer(state = initialState, action) {
	const {type, payload} = action;
	switch(type) {
		case UPDATE_NAME:
			return {...state, recipeName: payload};
		case UPDATE_CATEGORY:
			return {...state, recipeCategory: payload};
		case UPDATE_FIRST:
			return {...state, firstName: payload};
		case UPDATE_LAST:
			return {...state, lastName: payload};
		case UPDATE_INGREDIENTS:
			return {...state, ingredientsList: payload};
		default:
			return state;
	}
}

export default createStore(reducer);