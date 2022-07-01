import { waitFor } from '@testing-library/react';

import { mockCollab } from 'test-utils/mocks';

import * as collabsApi from 'shared/api/collabs';
import { mockDispatch } from 'test-utils/utils';

import collabsSlice from './slice';
import { getAllCollabs, getCollab, getPreviewCollabs } from './actions';
import { COLLABS_INITIAL_STATE, COLLABS_SLICE_NAME } from './constants';

const state = collabsSlice.getInitialState();

describe('collabsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(COLLABS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(collabsSlice.name).toEqual(COLLABS_SLICE_NAME);
  });
});

describe('correct set collabsSlice all collabs with mock action payload', () => {
  test('expect set correct fulfilled all collabs', () => {
    const action = {
      type: getAllCollabs.fulfilled.type,
      payload: [mockCollab],
    };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      collabs: [mockCollab],
    });
  });

  test('expect set isFetching during all collabs pending', () => {
    const action = { type: getAllCollabs.pending.type };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get all collabs', () => {
    const action = { type: getAllCollabs.rejected.type, payload: 'error' };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set collabsSlice preview collabs with mock action payload', () => {
  test('expect set correct fulfilled preview collabs', () => {
    const action = {
      type: getPreviewCollabs.fulfilled.type,
      payload: [mockCollab],
    };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      collabs: [mockCollab],
    });
  });

  test('expect set isFetching during preview collabs pending', () => {
    const action = { type: getPreviewCollabs.pending.type };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get preview collabs', () => {
    const action = { type: getPreviewCollabs.rejected.type, payload: 'error' };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set collabsSlice collab with mock action payload', () => {
  test('expect set correct fulfilled collab', () => {
    const action = {
      type: getCollab.fulfilled.type,
      payload: mockCollab,
    };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      collab: mockCollab,
    });
  });

  test('expect set isFetching during collab pending', () => {
    const action = { type: getCollab.pending.type };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get collab', () => {
    const action = { type: getCollab.rejected.type, payload: 'error' };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

jest.mock('shared/api/collabs');
const mockCollabsApi = collabsApi as jest.Mocked<typeof collabsApi>;

describe('resolved get collabs with async thunk', () => {
  test('expect resolved get all beats response', async () => {
    const mockData = {
      data: [mockCollab],
    };
    mockCollabsApi.fetchAllCollabs.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getAllCollabs());

    await waitFor(() => {
      expect(beats.payload).toEqual([mockCollab]);
      expect(mockCollabsApi.fetchAllCollabs).toBeCalled();
    });
  });

  test('expect resolved get preview collabs response', async () => {
    const mockData = {
      data: [mockCollab],
    };
    mockCollabsApi.fetchPreviewCollabs.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getPreviewCollabs());

    await waitFor(() => {
      expect(beats.payload).toEqual([mockCollab]);
      expect(mockCollabsApi.fetchPreviewCollabs).toBeCalled();
    });
  });

  test('expect resolved get collab response', async () => {
    const mockData = {
      data: [mockCollab],
    };
    mockCollabsApi.fetchCollab.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getCollab(1));

    await waitFor(() => {
      expect(beats.payload).toEqual([mockCollab]);
      expect(mockCollabsApi.fetchCollab).toBeCalledWith(1);
    });
  });
});

describe('rejected get collabs with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected all collabs response', async () => {
    const mockData = {
      error: 'error',
    };
    mockCollabsApi.fetchAllCollabs.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getAllCollabs());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected preview collabs response', async () => {
    const mockData = {
      error: 'error',
    };
    mockCollabsApi.fetchPreviewCollabs.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getPreviewCollabs());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected collab response', async () => {
    const mockData = {
      error: 'error',
    };
    mockCollabsApi.fetchCollab.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getCollab(1));

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });
});
