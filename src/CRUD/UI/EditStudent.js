import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {editStudent} from '../Slice/Slice'


function EditStudent(){
    const Index = useParams().id;
    const data = useSelector((state) => state.Student)
    const dispatch = useDispatch()
    const Navi = useNavigate()

    const [info, setInfo] = useState({
        name : data[Index].name,
        age :data[Index].age,
        batch:data[Index].batch,
        course:data[Index].batch
    })
    const handleChange = (e) =>{
        setInfo({...info,[e.target.name] : e.target.value})
    }
    const handleClick = () => {
      dispatch(editStudent({info,Index}))
      Navi('/student')
    }
    return(
        <>
        <h1>This is Edit Compo</h1>
        <div className="displaybox">
        <div className="input-group">
        <input type="text" placeholder="Enter Name" name="name" onChange={handleChange} /><br/>
        </div>
        <div className="input-group">
        <input type="number" placeholder="Enter Age" name="age" onChange={handleChange} /><br/>
        </div>
        <div className="input-group">
        <input type="text" placeholder="Enter Batch" name="batch" onChange={handleChange} /><br/>
        </div>
        <div className="input-group">
        <input type="text" placeholder="Enter Course" name="course" onChange={handleChange} /><br/>
        </div>
        </div>
        <div className="button">
        <button className="button1" onClick={handleClick}>Update</button>
        <button className="button2" onClick={handleClick}>Back</button>
        </div>
        </>
    )
}
export default EditStudent