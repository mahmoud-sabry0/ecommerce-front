import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "../../../utils";
import { TProduct } from "../../../types";
import { RootState } from "../../../store/index";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (product: TProduct, thunkAPI) => {
    const id = product?.id;
    const { rejectWithValue, getState } = thunkAPI;
        const { auth } = getState() as RootState;
    try {

     const isRecordExist = await axios.get(
        `/wishlist?userId=${auth.user?.id}&productId=${id}`
      );
      console.log(isRecordExist)
      
      if (isRecordExist.data.length > 0) {
        await axios.delete(`/wishlist/${isRecordExist.data[0].id}`);
       
        return { type: "remove",id };
      } else {
        await axios.post("/wishlist", { userId: auth.user?.id, productId: id });
      
        return { type: "add", id: id, product: product };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actLikeToggle;