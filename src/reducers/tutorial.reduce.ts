import { Action } from '@ngrx/store'
import { Tutorial } from '../model/tutorial.model'
import * as TutorialActions from '../actions/tutorial.action'

const initialState: Tutorial = {
  name: 'angular',
  url: 'http://angular.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch(action.type) {
    case TutorialActions.ADD_TUTORIAL:
        return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
        state.splice(action.payload, 1)
        return state
    default:
        return state;
  }
}
