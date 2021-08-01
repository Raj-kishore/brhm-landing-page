import { createAction, props } from '@ngrx/store';

 
export const setArrowStatus = createAction(
    'Set the Arrow Status as True or False',
    props<{ arrowStatus }>()
  );