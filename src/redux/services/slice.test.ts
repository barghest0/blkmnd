import { waitFor } from '@testing-library/react';

import { mockCollab } from 'test-utils/mocks';

import * as ServicesApi from 'shared/api/services';
import { mockDispatch } from 'test-utils/utils';

import slice from './slice';
import { getAllServices } from './actions';
import { SERVICES_INITIAL_STATE, SERVICES_SLICE_NAME } from './constants';

const state = slice.getInitialState();

describe('services slice tate tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(SERVICES_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(slice.name).toEqual(SERVICES_SLICE_NAME);
  });
});

describe('correct set sliceall collabs with mock action payload', () => {
  test('expect set correct fulfilled all services', () => {
    const action = {
      type: getAllServices.fulfilled.type,
      payload: [mockCollab],
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      services: [mockCollab],
    });
  });

  test('expect set isFetching during all services pending', () => {
    const action = { type: getAllServices.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get all services', () => {
    const action = { type: getAllServices.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

jest.mock('shared/api/services');
const mockServicesApi = ServicesApi as jest.Mocked<typeof ServicesApi>;

describe('resolved get collabs with async thunk', () => {
  test('expect resolved get all services response', async () => {
    const mockData = {
      data: [mockCollab],
    };
    mockServicesApi.fetchAllServices.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getAllServices());

    await waitFor(() => {
      expect(beats.payload).toEqual([mockCollab]);
      expect(mockServicesApi.fetchAllServices).toBeCalled();
    });
  });
});

describe('rejected get services with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected all services response', async () => {
    const mockData = {
      error: 'error',
    };
    mockServicesApi.fetchAllServices.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getAllServices());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });
});
