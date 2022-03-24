import {createSlice} from "@reduxjs/toolkit";
import {ProfileTypes} from "../../types/profileTypes";

const initialState: ProfileTypes = {
    username: 'Any Percent',
    sex: false,
    status: '😎',
    job: 'Front-End Developer',
    location: 'United States Englewood, New Jersey',
    avatar: 'https://sun9-54.userapi.com/impg/FoLiVaAyx-xvbb0Q8bxOn4B4mG36nzJVeOQKdg/68FoD2MaN7k.jpg?size=1080x1053&quality=96&sign=2971f00eb8fffa205f84352c62706fb5&type=album',
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export const {} = profileSlice.actions;

export default profileSlice.reducer;