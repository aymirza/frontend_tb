import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const TableEmplNarushenie = (props) => {
    const {id, lastname, firstname, uchastka,tsex_uchastka,pravila,narushenie,imgurl,imgfullname,imgtype} = props.obj;
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
            <td> {lastname}</td>
            <td> {firstname}</td>
            <td> {uchastka}</td>
            <td> {tsex_uchastka}</td>
            <td> {pravila}</td>
            <td> {narushenie}</td>
            <td> <a href={imgurl}>{imgurl}</a></td>
            {/*<td> {imgfullname}</td>*/}
            {/*<td> {imgtype}</td>*/}
            {/*<td>*/}
            {/*    /!*<Link className={"edit-link"}*!/*/}
            {/*    /!*          to={"/editStudent/" + id}>Edit</Link>*!/*/}
            {/*    /!*    <Button onClick={deleteStudent}*!/*/}
            {/*    /!*            size={"sm"} variant={"danger"}>*!/*/}
            {/*    /!*        Delete*!/*/}
            {/*    /!*    </Button>*!/*/}
            {/*</td>*/}

        </tr>
    );
};
export default TableEmplNarushenie;