import { createReducer, on } from '@ngrx/store';
import { setArrowStatus } from './gstock.actions';

export const initialState = false;

const _counterReducer = createReducer(
  initialState,
  on(setArrowStatus, (state) => state)
);

export function counterReducer(state:any, action:any) { 
  //return _counterReducer(state, action);
}