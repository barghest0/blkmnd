import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Beat, License } from 'redux/beats/types';
import { Service } from 'redux/service-details/types';
import { SoundKit } from 'redux/sound-kit-details/types';

import {
  getFeaturedBeat,
  getLicenses,
  getPreviewBeats,
  getPreviewServices,
  getPreviewSoundKits,
} from './actions';
import { LANDING_INITIAL_STATE, LANDING_SLICE_NAME } from './constants';

const landing = createSlice({
  name: LANDING_SLICE_NAME,
  initialState: LANDING_INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getPreviewBeats.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.isPreviewBeatsFetching = false;
      state.previewBeatsErrors = null;
      state.previewBeats = action.payload;
    },

    [getPreviewBeats.pending.type]: (state) => {
      state.isPreviewBeatsFetching = true;
    },

    [getPreviewBeats.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isPreviewBeatsFetching = false;
      state.previewBeatsErrors = action.payload;
    },

    [getFeaturedBeat.fulfilled.type]: (
      state,
      action: PayloadAction<Beat[]>,
    ) => {
      state.featuredBeat =
        action.payload[Math.floor(Math.random() * action.payload.length)];
      state.isFeaturedBeatFetching = false;
      state.featuredBeatErrors = null;
    },

    [getFeaturedBeat.rejected.type]: (state, action: PayloadAction<any>) => {
      state.featuredBeatErrors = action.payload;
      state.isFeaturedBeatFetching = false;
    },

    [getFeaturedBeat.pending.type]: (state) => {
      state.isFeaturedBeatFetching = true;
    },

    [getLicenses.fulfilled.type]: (state, action: PayloadAction<License[]>) => {
      state.isLicensesFetching = false;
      state.licensesErrors = null;
      state.licenses = action.payload;
    },

    [getLicenses.pending.type]: (state) => {
      state.isLicensesFetching = true;
    },

    [getLicenses.rejected.type]: (state, action: PayloadAction<any>) => {
      state.isLicensesFetching = false;
      state.licensesErrors = action.payload;
    },

    [getPreviewSoundKits.fulfilled.type]: (
      state,
      action: PayloadAction<SoundKit[]>,
    ) => {
      state.isPreviewSoundKitsFetching = false;
      state.previewSoundKits = action.payload;
      state.previewSoundKitsErrors = null;
    },

    [getPreviewSoundKits.pending.type]: (state) => {
      state.isPreviewSoundKitsFetching = true;
    },

    [getPreviewSoundKits.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isPreviewSoundKitsFetching = false;
      state.previewSoundKitsErrors = action.payload;
    },

    [getPreviewServices.fulfilled.type]: (
      state,
      action: PayloadAction<Service[]>,
    ) => {
      state.isPreviewServicesFetching = false;
      state.previewServicesErrors = null;
      state.previewServices = action.payload;
    },

    [getPreviewServices.pending.type]: (state) => {
      state.isPreviewServicesFetching = true;
    },

    [getPreviewServices.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isPreviewServicesFetching = false;
      state.previewServicesErrors = action.payload;
    },
  },
});

export default landing;
