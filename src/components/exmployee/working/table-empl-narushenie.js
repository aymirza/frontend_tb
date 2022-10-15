import React from "react";


const TableEmplNarushenie = (props) => {

    const {  lastname, firstname, uchastka, tsex_uchastka, pravila, narushenie, imgurl, predlojenie} = props.obj;

    return (
            <tr>

                <td> {lastname}</td>
                <td > {firstname}</td>
                <td > {uchastka} </td>
                <td> {tsex_uchastka}</td>
                <td> {pravila}</td>
                <td>{narushenie}</td>
                <td> {predlojenie}</td>
                <td><a href={imgurl}>{imgurl}</a></td>
            </tr>

    );
};
export default TableEmplNarushenie;