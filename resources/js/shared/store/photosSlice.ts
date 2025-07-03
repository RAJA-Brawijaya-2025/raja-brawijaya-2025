import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhotosState {
  capturedImages: string[];
}

const initialState: PhotosState = {
  capturedImages: [],
};

interface UpdateImagePayload {
  index: number;
  dataUrl: string;
}

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addCapturedImage: (state, action: PayloadAction<string>) => {
      if (state.capturedImages.length < 3) {
        state.capturedImages.push(action.payload);
      }
    },
    clearCapturedImages: (state) => {
      state.capturedImages = [];
    },

    updateCapturedImage: (state, action: PayloadAction<UpdateImagePayload>) => {
      const { index, dataUrl } = action.payload;
      if (state.capturedImages[index] !== undefined) {
        state.capturedImages[index] = dataUrl;
      }
    },
  },
});

export const { addCapturedImage, clearCapturedImages, updateCapturedImage } =
  photosSlice.actions;

export default photosSlice.reducer;
