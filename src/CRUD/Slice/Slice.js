import { createSlice } from "@reduxjs/toolkit"

const StuData = [
    {name : "Swarnali", age : 30, batch : "2021", course : "Designing"},
    {name : "Puja", age : 28, batch : "2019", course : "Lawer"},
    {name : "Debosmita", age : 27, batch : "2018", course : "Doctor"},
    {name : "Payel", age : 25, batch : "2017", course : "Teacher"},
    {name : "Anamika", age : 32, batch : "2016", course : "Player"},
    {name : "Sampriti", age : 22, batch : "2015", course : "Student"},
]

const StuSlice = createSlice({
    name:"Student_Data",
    initialState: StuData,
    reducers : {
        editStudent : (state,action) => {
        state[action.payload.Index] = action.payload.info
        },
        addStudent : (state, action) => {
            state.push(action.payload.tempObj )

        }
    }
})

export const {editStudent, addStudent} = StuSlice.actions;
export default StuSlice.reducer;