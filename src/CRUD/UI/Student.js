import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

function Student(){
    const stuData = useSelector((state) => state.Student)
    const Navi = useNavigate();
    // console.log(stuData)
    return(
        <>
        <div className="heading1">
        <h1 className="h1">Student</h1>
        <button className="addstudent" onClick={() => Navi('/addstudent')}>Add New Student</button>
        </div>
        <table className="chart"  align="center" >
            <thead>
                <tr>
                    <th>S No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Batch</th>
                    <th>Course</th>
                    <th>Change</th>
                </tr>
            </thead>
         
            <tbody>
                {stuData.map((item,index) => {
                    return(
                        <tr key = {index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.batch}</td>
                          <td>{item.course}</td>
                          <td><Link to = {`/editstudent/${index}`}>Edit</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}
export default Student