import { Reducer } from 'redux-testkit';
import ImagePreviewsPaneReducer from '../ImagePreviewsPaneReducer';



describe('ImagePreviewsPaneReducer', () => {



  it('should have initial state', () => {
    expect(ImagePreviewsPaneReducer()).toEqual({ imagesList: [], currentImageIndex: 0 });
  });



  it('should handle Action.ImagePreviewPane.ChangeList action on initial state', () => {
    const imagesList = [ { uri: 'https://example.com/thumbnail1.png', key: 'key1' } ]
    const action = { type: 'Action.ImagePreviewPane.ChangeList', imagesList }
    const result = { imagesList, currentImageIndex: 0 }
    Reducer(ImagePreviewsPaneReducer).expect(action).toReturnState(result)
  })


  it('should handle Action.ImagePreviewPane.ChangeCurrent on existing state', () => {
    const imagesList = [
      { uri: 'https://example.com/thumbnail1.png', key: 'key1' },
      { uri: 'https://example.com/thumbnail2.png', key: 'key2' }
    ]
    const action = { type: 'Action.ImagePreviewPane.ChangeCurrent', currentImageIndex: 1 }
    const state = { imagesList, currentImageIndex: 0 };
    const result = { imagesList, currentImageIndex: 1 }
    Reducer(ImagePreviewsPaneReducer).withState(state).expect(action).toReturnState(result);
  })


  it('should handle a bad Action.ImagePreviewPane.ChangeCurrent on existing state', () => {
    const imagesList = [
      { uri: 'https://example.com/thumbnail1.png', key: 'key1' },
      { uri: 'https://example.com/thumbnail2.png', key: 'key2' }
    ]
    const action = { type: 'Action.ImagePreviewPane.ChangeCurrent', currentImageIndex: 9 }
    const state = { imagesList, currentImageIndex: 0 };
    Reducer(ImagePreviewsPaneReducer).withState(state).expect(action).toReturnState(state);
  })


  it('should return the same state after accpeting a non existing action', () => {
    const action = { type: 'NON_EXISTING' };
    const imagesList = [ { uri: 'https://example.com/thumbnail1.png', key: 'key1' } ]
    const state = { imagesList, currentImageIndex: 0 };
    Reducer(ImagePreviewsPaneReducer).withState(state).expect(action).toReturnState(state);
  });
});
