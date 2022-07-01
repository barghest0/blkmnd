import { waitFor } from '@testing-library/react';

import { mockDispatch } from 'test-utils/utils';
import { mockLicense } from 'test-utils/mocks';
import * as licensesApi from 'shared/api/licenses';

import licensesSlice from './slice';
import { getLicense, getLicenses } from './actions';
import { LICENSE_INITIAL_STATE, LICENSE_SLICE_NAME } from './constants';

const state = licensesSlice.getInitialState();

describe('licensesSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(LICENSE_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(licensesSlice.name).toEqual(LICENSE_SLICE_NAME);
  });
});

describe('correct set licensesSlice all licenses with mock action payload', () => {
  test('expect set correct fulfilled licenses', () => {
    const action = {
      type: getLicenses.fulfilled.type,
      payload: [mockLicense],
    };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      licenses: [mockLicense],
    });
  });

  test('expect set isFetching during licenses pending', () => {
    const action = { type: getLicenses.pending.type };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get licenses beats', () => {
    const action = {
      type: getLicenses.rejected.type,
      payload: 'error',
    };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set licensesSlice license with mock action payload', () => {
  test('expect set correct fulfilled license', () => {
    const action = {
      type: getLicense.fulfilled.type,
      payload: mockLicense,
    };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      license: mockLicense,
    });
  });

  test('expect set isFetching during license pending', () => {
    const action = { type: getLicense.pending.type };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get license beats', () => {
    const action = {
      type: getLicense.rejected.type,
      payload: 'error',
    };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

jest.mock('shared/api/licenses');
const mockLicensesApi = licensesApi as jest.Mocked<typeof licensesApi>;

describe('resolved get licenses with async thunk', () => {
  test('expect resolved get all licenses response', async () => {
    const mockData = {
      data: [mockLicense],
    };
    mockLicensesApi.fetchLicenses.mockResolvedValueOnce(mockData);
    const licenses = await mockDispatch(getLicenses());

    await waitFor(() => {
      expect(licenses.payload).toEqual([mockLicense]);
      expect(mockLicensesApi.fetchLicenses).toBeCalled();
    });
  });

  test('expect resolved get license response', async () => {
    const mockData = {
      data: mockLicense,
    };
    mockLicensesApi.fetchLicense.mockResolvedValueOnce(mockData);
    const license = await mockDispatch(getLicense(1));

    await waitFor(() => {
      expect(license.payload).toEqual(mockLicense);
      expect(mockLicensesApi.fetchLicense).toBeCalled();
    });
  });
});

describe('rejected get licenses with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected all licenses response', async () => {
    const mockData = {
      error: 'error',
    };
    mockLicensesApi.fetchLicenses.mockRejectedValue(mockData);
    const rejectedLicenses = await mockDispatch(getLicenses());

    await waitFor(() => {
      expect(rejectedLicenses.payload).toEqual(mockData);
    });
  });

  test('expect rejected license response', async () => {
    const mockData = {
      error: 'error',
    };
    mockLicensesApi.fetchLicense.mockRejectedValue(mockData);
    const rejectedLicense = await mockDispatch(getLicense(1));

    await waitFor(() => {
      expect(rejectedLicense.payload).toEqual(mockData);
    });
  });
});
