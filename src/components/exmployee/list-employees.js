import React,{useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import TableEmployees from "./table-eployees";


const ListEmployees = () => {
    const [student, setStudents] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4040/api/empl/")
            .then(({data}) => {
                setStudents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const DataTable = () =>{
        return student.map((res, i) => {
            return <TableEmployees obj={res} key={i}/>;
        });
    };
    return(
        <div className={"table-wrapper"}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Uchastka</th>
                    <th>Photo_Id</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};
export default ListEmployees;

//
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import {useEffect, useState} from 'react';
//
//
// function ListEmployees() {
//     const [search, setSearch] = useState([]);
//     const [empid, setRecord] = useState([]);
//
//     var i = 1; // For Serial no increment
//
//     // For loading reacord on Windoe Load
//     const loadRecords = async () => {
//         axios.get("http://localhost:4040/api/empl/")
//             .then(response => {
//                 setSearch(response.data);
//             });
//
//     }
//     useEffect(() => {
//         loadRecords();
//     }, []);
//
//
//     // Search Item by Name
//     const searchRecords = () => {
//         axios.get('http://localhost:4040/api/empl/' + {empid})
//             .then(response => {
//                 setSearch(response.data);
//             });
//     }
//     //     const searchPhoto = (id) =>
//     // {
//     //     axios.get('http://localhost:4040/api/photo-narushenie/'+id)
//     //     .then(response => {
//     //       setSearch(response.data);
//     //     });
//     // }
//
//
//     return (
//         <div class="container">
//             <h4 className="text-center text-success mt-5"><b>Search Movie by Name</b></h4>
//             <div class="input-group mb-4 mt-3">
//                 <div class="form-outline">
//                     <input type="text" id="form1" onChange={(e) => setRecord(e.target.value)} class="form-control"
//                            placeholder="search record" style={{backgroundColor: "#ececec"}}/>
//                 </div>
//                 <button type="button" onClick={searchRecords} class="btn btn-success">
//                     Search Movie
//                 </button>
//             </div>
//             <table class="table table-striped">
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Uchastka</th>
//                     <th>PhotoDate</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {search.map((empid) =>
//
//                     <tr>
//                         <td>{empid.name}</td>
//                         <td><h6>{empid.uchastka}</h6></td>
//                         <td><img className="img-fluid"/>{empid.photo_id}</td>
//                     </tr>
//                 )}
//
//                 </tbody>
//             </table>
//         </div>
//
//     );
// }

// export default ListEmployees;