import React, {useState} from 'react';
import axios from 'axios';

const CreateEmplNarushenie = () => {
    const [result, setResult] = useState("");
    const handleImageUpload = (event) => {
        event.preventDefault();
        const file = event.currentTarget["fileInput"].files[0];

        const formData = new FormData();
        formData.append("lastname", "lastname");
        formData.append("firstname", "firstname");
        formData.append("uchastka", "uchastka");
        formData.append("tsex_uchastka", "tsex_uchastka");
        formData.append("pravila", "pravila");
        formData.append("narushenie", "narushenie");
        formData.append("file", file);

        fetch("http://localhost:4041/api/upload", {
            method: "POST",
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                setResult(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            <form onSubmit={handleImageUpload}>
                <input id="fileInput" type="file"/>
                <input type="submit"/>
            </form>
            <br/>
            <br/>
            Result:
            <br/>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    );
};
export default CreateEmplNarushenie;


