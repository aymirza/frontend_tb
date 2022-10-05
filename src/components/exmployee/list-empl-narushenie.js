import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import TableEmplNarushenie from "./table-empl-narushenie";


const ListEmplNarushenie = () => {
    const [student, setStudents] = useState([]);
    useEffect(() => {
        axios
            .get("http://10.45.180.94:4041/api/")
            .then(({data}) => {
                setStudents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const DataTable = () => {
        return student.map((res, i) => {
            return <TableEmplNarushenie obj={res} key={i}/>;
        });
    };
    return (
        <div  >
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>lastname</th>
                    <th>firstname</th>
                    <th>uchastka</th>
                    <th>tsex_uchastka</th>
                    <th>pravila</th>
                    <th>narushenie</th>
                    <th>img_url</th>
                    <th>img_fullname</th>
                    <th>img_type</th>

                </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};
export default ListEmplNarushenie;

