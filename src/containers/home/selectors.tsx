import {createSelector} from 'reselect';

export const selectHome = (state: any) => state.home;

export const makeSelectData = () => createSelector(
	selectHome,
	home => home.data,
);
