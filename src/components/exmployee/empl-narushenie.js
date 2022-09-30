import React,{useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import TableNarushenie from "./table-naruhsenie";


const EmplNaruhsenie = () => {
    const [student, setStudents] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4041/api")
            .then(({data}) => {
                setStudents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const DataTable = () =>{
        return student.map((res, i) => {
            return <TableNarushenie obj={res} key={i}/>;
        });
    };
    return(
        <div className={"table-wrapper"}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>lastname</th>
                    <th>firstname</th>
                    <th>uchastka</th>
                    <th>tsex_uchastka</th>
                    <th>pravila</th>
                    <th>narushenie</th>
                    <th>img</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};
export default EmplNaruhsenie;

