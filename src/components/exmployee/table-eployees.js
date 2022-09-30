import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const TableEmployees = (props) => {
    const {id, name, uchastka, photo_id} = props.obj;
    // const deleteStudent = () => {
    //     axios
    //         .delete("http://localhost:4040/api/students/delete-student/" + id)
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 alert("Student successfully deleted");
    //                 window.location.reload();
    //             } else Promise.reject();
    //         })
    //         .catch((err) => alert("Something went wrong"));
    // };
    return (
        <tr>
            <td>{name}</td>
            <td>{uchastka}</td>
            <td> {photo_id}</td>
            <td>
                {/*<Link className={"edit-link"}*/}
                {/*          to={"/editStudent/" + id}>Edit</Link>*/}
                {/*    <Button onClick={deleteStudent}*/}
                {/*            size={"sm"} variant={"danger"}>*/}
                {/*        Delete*/}
                {/*    </Button>*/}
            </td>

        </tr>
    );
};
export default TableEmployees;