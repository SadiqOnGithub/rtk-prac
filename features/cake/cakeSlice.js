const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload || 1;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeAction = cakeSlice.actions;