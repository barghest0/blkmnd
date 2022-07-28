import { waitFor } from '@testing-library/react';

import {
  mockBeat,
  mockCollab,
  mockLicense,
  mockSoundKit,
} from 'test-utils/mocks';
import { mockDispatch } from 'test-utils/utils';
import * as beatsApi from 'shared/api/beats';
import * as soundKitsApi from 'shared/api/sound-kits';
import * as servicesApi from 'shared/api/services';
import * as licensesApi from 'shared/api/licenses';

import {
  getFeaturedBeat,
  getLicenses,
  getPreviewBeats,
  getPreviewServices,
  getPreviewSoundKits,
} from './actions';
import { LANDING_INITIAL_STATE, LANDING_SLICE_NAME } from './constants';
import slice from './slice';

const state = slice.getInitialState();

describe('landing slice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(LANDING_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(slice.name).toEqual(LANDING_SLICE_NAME);
  });
});

describe('correct set landing slice preview beats with mock action payload', () => {
  test('expect set correct fulfilled preview beats', () => {
    const action = {
      type: getPreviewBeats.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      previewBeats: [mockBeat],
    });
  });

  test('expect set isFetching during preview beats pending', () => {
    const action = { type: getPreviewBeats.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isPreviewBeatsFetching: true,
    });
  });

  test('expect set errors after rejected get preview beats', () => {
    const action = { type: getPreviewBeats.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      previewBeatsErrors: 'error',
    });
  });
});

describe('correct set landing slice featured beat with mock action payload', () => {
  test('expect set correct fulfilled featured beat', () => {
    const action = {
      type: getFeaturedBeat.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      featuredBeat: mockBeat,
    });
  });

  test('expect set isFetching during featured beat pending', () => {
    const action = { type: getFeaturedBeat.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFeaturedBeatFetching: true,
    });
  });

  test('expect set errors after rejected get featured beat', () => {
    const action = { type: getFeaturedBeat.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      featuredBeatErrors: 'error',
    });
  });
});

describe('correct set preview sound kits with mock action payload', () => {
  test('expect set correct fulfilled preview sound kits', () => {
    const action = {
      type: getPreviewSoundKits.fulfilled.type,
      payload: [mockSoundKit],
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      previewSoundKits: [mockSoundKit],
    });
  });

  test('expect set isFetching during preview sound kits pending', () => {
    const action = { type: getPreviewSoundKits.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isPreviewSoundKitsFetching: true,
    });
  });

  test('expect set errors after rejected get preview sound kits', () => {
    const action = {
      type: getPreviewSoundKits.rejected.type,
      payload: 'error',
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      previewSoundKitsErrors: 'error',
    });
  });
});

describe('correct set preview services with mock action payload', () => {
  test('expect set correct fulfilled preview services', () => {
    const action = {
      type: getPreviewServices.fulfilled.type,
      payload: [mockCollab],
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      previewServices: [mockCollab],
    });
  });

  test('expect set isFetching during preview services pending', () => {
    const action = { type: getPreviewServices.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isPreviewServicesFetching: true,
    });
  });

  test('expect set errors after rejected get preview services', () => {
    const action = { type: getPreviewServices.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      previewServicesErrors: 'error',
    });
  });
});

describe('correct set all licenses with mock action payload', () => {
  test('expect set correct fulfilled licenses', () => {
    const action = {
      type: getLicenses.fulfilled.type,
      payload: [mockLicense],
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      licenses: [mockLicense],
    });
  });

  test('expect set isFetching during licenses pending', () => {
    const action = { type: getLicenses.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isLicensesFetching: true,
    });
  });

  test('expect set errors after rejected get licenses beats', () => {
    const action = {
      type: getLicenses.rejected.type,
      payload: 'error',
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      licensesErrors: 'error',
    });
  });
});

jest.mock('shared/api/beats');
const mockBeatsApi = beatsApi as jest.Mocked<typeof beatsApi>;

jest.mock('shared/api/sound-kits');
const mockSoundKitsApi = soundKitsApi as jest.Mocked<typeof soundKitsApi>;

jest.mock('shared/api/services');
const mockServicesApi = servicesApi as jest.Mocked<typeof servicesApi>;

jest.mock('shared/api/licenses');
const mockLicensesApi = licensesApi as jest.Mocked<typeof licensesApi>;

describe('resolved get landing products with async thunk', () => {
  test('expect resolved get preview beats response', async () => {
    const mockData = {
      data: [mockBeat],
    };
    mockBeatsApi.fetchPreviewBeats.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getPreviewBeats());

    await waitFor(() => {
      expect(beats.payload).toEqual([mockBeat]);
      expect(mockBeatsApi.fetchPreviewBeats).toBeCalled();
    });
  });

  test('expect resolved get featured beat response', async () => {
    const mockData = {
      data: mockBeat,
    };
    mockBeatsApi.fetchFeaturedBeat.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getFeaturedBeat());

    await waitFor(() => {
      expect(beats.payload).toEqual(mockBeat);
      expect(mockBeatsApi.fetchFeaturedBeat).toBeCalledWith();
    });
  });

  test('expect resolved get preview services response', async () => {
    const mockData = {
      data: [mockCollab],
    };
    mockServicesApi.fetchPreviewServices.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getPreviewServices());

    await waitFor(() => {
      expect(beats.payload).toEqual([mockCollab]);
      expect(mockServicesApi.fetchPreviewServices).toBeCalled();
    });
  });

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

  test('expect resolved get preview sound kits response', async () => {
    const mockData = {
      data: [mockSoundKit],
    };
    mockSoundKitsApi.fetchPreviewSoundKits.mockResolvedValueOnce(mockData);
    const soundKit = await mockDispatch(getPreviewSoundKits());

    await waitFor(() => {
      expect(soundKit.payload).toEqual([mockSoundKit]);
      expect(mockSoundKitsApi.fetchPreviewSoundKits).toBeCalled();
    });
  });
});

describe('rejected get landing products with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected preview beats response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchPreviewBeats.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getPreviewBeats());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected preview services response', async () => {
    const mockData = {
      error: 'error',
    };
    mockServicesApi.fetchPreviewServices.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getPreviewServices());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected featured beat response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchFeaturedBeat.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getFeaturedBeat());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
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
});
