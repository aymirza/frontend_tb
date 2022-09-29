import React, {useEffect, useState} from "react";
import axios from "axios";

function setPhoto(file) {

}


function CreateEmployee() {


    async function handleRegister(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const res = await fetch("http://localhost:4040/api/empl/create-empl", {
                method: "POST",
                body: formData,
            });
        } catch (err) {

        }
    }

    const [select, setseelcted] = useState('');
    const [optionList, setOptionList] = useState([]);
    const fetchData = (value) => {
        axios
            .get('http://localhost:4040/api/empl/uchastka')
            .then((response) => {
                const {data} = response;
                if (response.status === 200) {
                    setOptionList(data)
                } else {

                }
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <form encType="multipart/form-data" onSubmit={(e) => handleRegister(e)}>
            <input className="form-control" placeholder="Name" type="name" name="name" id="name" required/>
            <br/>
            <br/>
            <select
                className="form-control"
                name="uchastka"
                disabled={false}
                value={select}
                onChange={(e) => setseelcted(e.currentTarget.value)}>
                {optionList.map((item) => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <br/>
            <br/>
            <input className="form-control" type="file" accept=".png, .jpg, .jpeg" name="photo"/>
            <br/>
            <br/>
            <input type="submit" className="regbutton" value="PostData"/>
        </form>
    );
}

export default CreateEmployee;


