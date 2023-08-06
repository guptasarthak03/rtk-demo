const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require('axios');

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// auto generates pending, fullfilled and rejected action types.
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.data.map((user) => user.name));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builders) => {
    builders.addCase(fetchUsers.pending, state => {
        state.loading = true;
    })
    builders.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = ''
    })
    builders.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
    })
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
