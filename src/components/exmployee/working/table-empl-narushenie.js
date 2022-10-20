import React from "react";


const TableEmplNarushenie = (props) => {

    const {  lastname, firstname, uchastka, tsex_uchastka, pravila, narushenie, imgurl, predlojenie,date_narushenie} = props.obj;

    return (
            <tr>

                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}> {lastname}</td>
                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}> {firstname}</td>
                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}> {uchastka} </td>
                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}> {tsex_uchastka}</td>
                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}> {pravila}</td>
                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>{narushenie}</td>
                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}> {date_narushenie}</td>
                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}> {predlojenie}</td>
                <td style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}><a href={imgurl}><img src={imgurl} alt="Trulli" width="140" height="200"/></a></td>
            </tr>

    );
};
export default TableEmplNarushenie;