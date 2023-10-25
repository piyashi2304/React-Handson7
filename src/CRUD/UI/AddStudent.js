import React from "react"
import { addStudent } from "../Slice/Slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddStudent(){
    const dispatch = useDispatch();
    const Navi = useNavigate();
    const tempObj = {
        name : '',
        age : '',
        batch : '',
        course : ''
    }
    const handleChange = (e) => {
        tempObj[e.target.name] = e.target.value

    }
    const handleSubmit = () => {
        dispatch(addStudent({tempObj}))
        Navi('/student')


    }
    return(
        <>
        <h1>New Student</h1>
        <div className="displaybox">
        <div className="input-group">
        <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} /><br />
        </div>
        <div className="input-group">
        <input type="number" placeholder="Enter Age" name="age" onChange={handleChange} /><br />
        </div>
        <div className="input-group">
        <input type="text" placeholder="Enter batch" name="batch" onChange={handleChange} /><br />
        </div>
        <div className="input-group">
        <input type="text" placeholder="Enter course" name="course" onChange={handleChange} /><br />
        </div>
        </div>
        <div className="button">
        <button className="button1" onClick={handleSubmit}>Back</button>
        <button className="button2" onClick={handleSubmit}>Update</button>
       
        </div>
        </>

    )
}
export default AddStudent