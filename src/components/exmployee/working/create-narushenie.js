import React, {useState} from 'react';


const CreateNarushenie = () => {
    const [result, setResult] = useState("");


    const handleImageUpload = (event) => {
        event.preventDefault();

        const name = event.target["name"].value;


        const formData = new FormData();
        formData.append("name", name);


        fetch("http://localhost:4041/api/narushenie", {
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

    const [presult, setPResult] = useState("");


    const postPravila = (event) => {
        event.preventDefault();

        const pravilaname = event.target["pravilaname"].value;


        const formDataPravila = new FormData();
        formDataPravila.append("name", pravilaname);
        fetch("http://localhost:4041/api/pravila", {
            method: "POST",
            body: formDataPravila
        })
            .then((response) => response.json())
            .then((dataPravila) => {

                setPResult(dataPravila);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [tsresult, setTSResult] = useState("");


    const postTsex = (event) => {
        event.preventDefault();

        const tsexname = event.target["tsexname"].value;


        const formDataTsex = new FormData();
        formDataTsex.append("name", tsexname);
        fetch("http://localhost:4041/api/tsex", {
            method: "POST",
            body: formDataTsex
        })
            .then((response) => response.json())
            .then((dataTsex) => {

                setTSResult(dataTsex);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [uresult, setUResult] = useState("");


    const postUchastka = (event) => {
        event.preventDefault();

        const uchastkaname = event.target["uchastkaname"].value;


        const formDataUchastka = new FormData();
        formDataUchastka.append("name", uchastkaname);
        fetch("http://localhost:4041/api/uchastka", {
            method: "POST",
            body: formDataUchastka
        })
            .then((response) => response.json())
            .then((dataUchastka) => {

                setUResult(dataUchastka);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="card">
            <div className="card-header">
                <h1>CreateNarushenie</h1>
                <div className="card-body">
                    <form onSubmit={handleImageUpload}>
                        <div className="form-group">
                            <textarea className="form-control" id="name" type="text"/>
                        </div>
                        <br/>

                        <div className="form-group">
                            <input className="btn btn-sm btn-primary" type="submit"/>
                        </div>
                    </form>
                </div>

            </div>

            <br/>
            <br/>
            Result:
            <br/>
            <pre>{JSON.stringify(result, null, 2)}</pre>

            <br/>
            <br/>
            <div className="card-header">
                <h1>CreatePravila</h1>
                <div className="card-body">
                    <form onSubmit={postPravila}>
                        <div className="form-group">
                            <textarea className="form-control" id="pravilaname" type="text"/>
                        </div>
                        <br/>

                        <div className="form-group">
                            <input className="btn btn-sm btn-primary" type="submit"/>
                        </div>
                    </form>
                </div>

            </div>

            <br/>
            <br/>
            Result:
            <br/>
            <pre>{JSON.stringify(presult, null, 2)}</pre>

            <br/>
            <br/>
            <div className="card-header">
                <h1>CreateTsex</h1>
                <div className="card-body">
                    <form onSubmit={postTsex}>
                        <div className="form-group">
                            <textarea className="form-control" id="tsexname" type="text"/>
                        </div>
                        <br/>

                        <div className="form-group">
                            <input className="btn btn-sm btn-primary" type="submit"/>
                        </div>
                    </form>
                </div>

            </div>

            <br/>
            <br/>
            Result:
            <br/>
            <pre>{JSON.stringify(tsresult, null, 2)}</pre>

            <br/>
            <br/>
            <div className="card-header">
                <h1>CreateUchastka</h1>
                <div className="card-body">
                    <form onSubmit={postUchastka}>
                        <div className="form-group">
                            <textarea className="form-control" id="uchastkaname" type="text"/>
                        </div>
                        <br/>

                        <div className="form-group">
                            <input className="btn btn-sm btn-primary" type="submit"/>
                        </div>
                    </form>
                </div>

            </div>

            <br/>
            <br/>
            Result:
            <br/>
            <pre>{JSON.stringify(uresult, null, 2)}</pre>

        </div>


    );
};
export default CreateNarushenie;


