import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Producer } from "../types";
import { StorageService } from "../services/storageService";

interface ProducersState {
  producers: Producer[];
  loading: boolean;
  error: string | null;
}

const initialState: ProducersState = {
  producers: StorageService.loadProducers(),
  loading: false,
  error: null,
};

const producersSlice = createSlice({
  name: "producers",
  initialState,
  reducers: {
    addProducer: (state, action: PayloadAction<Producer>) => {
      state.producers.push(action.payload);
      StorageService.saveProducers(state.producers);
    },
    updateProducer: (state, action: PayloadAction<Producer>) => {
      const index = state.producers.findIndex(
        (p) => p.id === action.payload.id
      );
      if (index !== -1) {
        state.producers[index] = action.payload;
        StorageService.saveProducers(state.producers);
      }
    },
    deleteProducer: (state, action: PayloadAction<string>) => {
      state.producers = state.producers.filter((p) => p.id !== action.payload);
      StorageService.saveProducers(state.producers);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetToInitialData: (state) => {
      state.producers = StorageService.loadProducers();
    },
  },
});

export const {
  addProducer,
  updateProducer,
  deleteProducer,
  setLoading,
  setError,
  resetToInitialData,
} = producersSlice.actions;

export default producersSlice.reducer;
