import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import TableEmplNarushenie from "./table-empl-narushenie";


const ListEmplNarushenie = () => {
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
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Участка</th>
                    <th>Цех нарушение</th>
                    <th>Правила</th>
                    <th>Нарушения</th>
                    <th>Фото</th>
                    {/*<th>imgfullname</th>*/}
                    {/*<th>imgtype</th>*/}

                </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};
export default ListEmplNarushenie;

