import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import TableEmplNarushenie from "./table-empl-narushenie";


const ListEmplNarushenie = () => {
    const [student, setStudents] = useState([]);
    useEffect(() => {
        axios
            .get("http://10.45.180.16:4041/api")
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

        <div className="card">
            <Table    responsive style={{wordBreak: 'break-word'}}  >
                <thead  >

                <tr>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Фамилия</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Имя</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Участка</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Цех нарушение</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Правила</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Нарушения</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Дата нарушения</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Предложение</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Фото</th>
                    {/*<th>imgfullname</th>*/}
                    {/*<th>imgtype</th>*/}

                </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table >
        </div>
    );
};
export default ListEmplNarushenie;

