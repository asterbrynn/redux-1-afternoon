import {createStore} from 'redux';

const initialState = {
	recipeName: "",
	recipeCategory: "",
	firstName: "",
	lastName: "",
	ingredientsList: [],
	instructionsList: [],
	recipeList: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRST = "UPDATE_FIRST";
export const UPDATE_LAST = "UPDATE_LAST";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const UPDATE_LIST = "UPDATE_LIST";

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
		case UPDATE_INSTRUCTIONS:
			return {...state, instructionsList: payload};
		case UPDATE_LIST:
			const {
				recipeName, recipeCategory, firstName, lastName, ingredientsList, instructionsList
			} = state;
			const recipe = {
				recipeName, recipeCategory, firstName, lastName, ingredientsList, instructionsList
			};
			const newRecipeList = [...state.recipeList, recipe];
			return {...state, recipeList: newRecipeList};
		default:
			return state;
	}
}

export default createStore(reducer);