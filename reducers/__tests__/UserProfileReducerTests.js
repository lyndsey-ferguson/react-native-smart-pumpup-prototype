import { Reducer } from 'redux-testkit';
import UserProfileReducer from '../UserProfileReducer';



describe('UserProfileReducer', () => {



  it('should have initial state', () => {
    expect(UserProfileReducer()).toEqual({
      avatarUri: undefined,
      name: 'Unknown',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
    });
  });



  it('should handle Action.UserProfile action on initial state', () => {
    const action = {
      type: 'Action.UserProfile.Load',
      avatarUri: 'https://pumpup.com/avatar.png',
      name: 'pumpup',
      bio: 'PumpUp is a positive community for health and fitness.'
    }
    const result = {
      avatarUri: 'https://pumpup.com/avatar.png',
      name: 'pumpup',
      bio: 'PumpUp is a positive community for health and fitness.'
    }
    Reducer(UserProfileReducer).expect(action).toReturnState(result)
  })


  it('should return the same state after accpeting a non existing action', () => {
    const action = { type: 'NON_EXISTING' };
    const state = {
      avatarUri: 'https://pumpup.com/avatar.png',
      name: 'pumpup',
      bio: 'PumpUp is a positive community for health and fitness.'
    };
    Reducer(UserProfileReducer).withState(state).expect(action).toReturnState(state);
  });
});
