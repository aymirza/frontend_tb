import React,{useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import StudentTableRow from "./student-table-row";

const StudentList = () => {
    const [student, setStudents] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4040/api/students")
            .then(({data}) => {
                setStudents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const DataTable = () =>{
        return student.map((res, i) => {
            return <StudentTableRow obj={res} key={i}/>;
        });
    };
    return(
        <div className={"table-wrapper"}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll No</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};
export default StudentList;