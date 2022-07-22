import { waitFor } from '@testing-library/react';

import { mockCollab } from 'test-utils/mocks';

import * as servicesApi from 'shared/api/services';
import { mockDispatch } from 'test-utils/utils';

import slice from './slice';
import { getServiceDetails } from './actions';
import {
  SERVICE_DETAILS_INITIAL_STATE,
  SERVICE_DETAILS_SLICE_NAME,
} from './constants';

const state = slice.getInitialState();

describe('slice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(SERVICE_DETAILS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(slice.name).toEqual(SERVICE_DETAILS_SLICE_NAME);
  });
});

describe('correct set service details with mock action payload', () => {
  test('expect set correct fulfilled service details', () => {
    const action = {
      type: getServiceDetails.fulfilled.type,
      payload: mockCollab,
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      service: mockCollab,
    });
  });

  test('expect set isFetching during service details pending', () => {
    const action = { type: getServiceDetails.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get service details', () => {
    const action = { type: getServiceDetails.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

jest.mock('shared/api/services');
const mockServicesApi = servicesApi as jest.Mocked<typeof servicesApi>;

describe('resolved get service details with async thunk', () => {
  test('expect resolved get service details response', async () => {
    const mockData = {
      data: [mockCollab],
    };
    mockServicesApi.fetchService.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getServiceDetails(1));

    await waitFor(() => {
      expect(beats.payload).toEqual([mockCollab]);
      expect(mockServicesApi.fetchService).toBeCalledWith(1);
    });
  });
});

describe('rejected get service details with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected service details response', async () => {
    const mockData = {
      error: 'error',
    };

    mockServicesApi.fetchService.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getServiceDetails(1));

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });
});
