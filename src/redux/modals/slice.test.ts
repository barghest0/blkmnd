import modalsSlice from './slice';
import { MODALS_INITIAL_STATE, MODALS_SLICE_NAME } from './constants';
import { ModalsTypes } from './types';

const state = modalsSlice.getInitialState();
const { setModalVisability } = modalsSlice.actions;

describe('modalsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(MODALS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(modalsSlice.name).toEqual(MODALS_SLICE_NAME);
  });
});

describe('correct controls modalsSlice with mock action payload', () => {
  test('expect set download modal visability truthy', () => {
    const newState = modalsSlice.reducer(
      state,
      setModalVisability({ visability: true, modalType: ModalsTypes.download }),
    );
    expect(newState).toEqual({
      ...state,
      isDownloadOpen: true,
    });
  });
});
