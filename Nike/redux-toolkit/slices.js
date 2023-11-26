import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

var getAPI = createAsyncThunk(
  "api/getAPI",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:8080/user/id=${arg}`);
      var data = await res.json();
      console.log(data.favorites);
      if (data.favorites == null || data.favorites == "") {
        data.favorites = [];
      } else {
        data.favorites = data.favorites.split(",").map(Number);
      }
      console.log("data");
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
var putAPI = createAsyncThunk(
  "api/putAPI",
  async (user, { rejectWithValue }) => {
    console.log("put");
    console.log(user);
    let newUser = { ...user };
    newUser.favorites = user.favorites.join(",");
    console.log(newUser);
    try {
      const res = await fetch(`http://localhost:8080/user/id=${newUser.id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      var data = await res.json();
      if (data) {
        return user;
      }
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
var postAPI = createAsyncThunk(
  "api/postAPI",
  async (user, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8080/user", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      var data = await res.json();
      if (data) {
        return user;
      }
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

var reducer = createSlice({
  name: "api",
  initialState: {
    data: {},
    isSussecc: false,
    isLoading: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isSussecc = true;
      state.isLoading = false;
    },
    [getAPI.rejected]: (state, action) => {
      state.message = action.payload;
      state.isSussecc = false;
      state.isLoading = false;
    },
    [putAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [putAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isSussecc = true;
      state.isLoading = false;
    },
    [putAPI.rejected]: (state, action) => {
      state.message = action.payload;
      state.isSussecc = false;
      state.isLoading = false;
    },
    [postAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isSussecc = true;
      state.isLoading = false;
    },
    [postAPI.rejected]: (state, action) => {
      state.message = action.payload;
      state.isSussecc = false;
      state.isLoading = false;
    },
  },
});
export default reducer;
export { getAPI, putAPI, postAPI };
