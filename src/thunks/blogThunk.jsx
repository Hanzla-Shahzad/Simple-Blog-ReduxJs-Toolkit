import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getData = createAsyncThunk("getData", async () => {
  try {
    const res = await api.get("/posts");
    return res.data;
  } catch (error) {
    console.log("getApi========>error:", error);
  }
});
