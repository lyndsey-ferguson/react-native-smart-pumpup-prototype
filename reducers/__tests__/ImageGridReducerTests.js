import { Reducer } from 'redux-testkit';
import ImageGridReducer from '../ImageGridReducer';



describe('ImageGridReducer', () => {



  it('should have initial state', () => {
    expect(ImageGridReducer()).toEqual({ imagesList: [] });
  });



  it('should handle Action.ImageGrid.Load action on initial state', () => {
    const imagesList = [ { uri: 'https://example.com/thumbnail1.png', key: 'key1' } ]
    const action = { type: 'Action.ImageGrid.Load', imagesList }
    const result = { imagesList }
    Reducer(ImageGridReducer).expect(action).toReturnState(result)
  })


  it('should return the same state after accpeting a non existing action', () => {
    const action = { type: 'NON_EXISTING' };
    const imagesList = [ { uri: 'https://example.com/thumbnail1.png', key: 'key1' } ]
    const state = { imagesList };
    Reducer(ImageGridReducer).withState(state).expect(action).toReturnState(state);
  });
});
