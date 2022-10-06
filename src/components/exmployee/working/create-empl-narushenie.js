import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CreateEmplNarushenie = () => {
    const [result, setResult] = useState("");


    const handleImageUpload = (event) => {
        event.preventDefault();
        const file = event.currentTarget["fileInput"].files[0];
        const lastname = event.target["lastname"].value;
        const firstname = event.target["firstname"].value;
        const uchastka = event.target["uchastka"].value;
        const tsex_uchastka = event.target["tsex_uchastka"].value;
        const pravila = event.target["pravila"].value;
        const narushenie = event.target["narushenie"].value;

        const formData = new FormData();
        formData.append("lastname", lastname);
        formData.append("firstname", firstname);
        formData.append("uchastka", uchastka);
        formData.append("tsex_uchastka", tsex_uchastka);
        formData.append("pravila", pravila);
        formData.append("narushenie", narushenie);
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


    const [uchastkaSelect, setUchastkaSelected] = useState('');
    const [uchastkaOptionList, setUchastkaOptionList] = useState([]);
    const fetchDataUchastka = (value1) => {
        axios
            .get('http://localhost:4041/api/uchastka')
            .then((response) => {
                const {data} = response;
                if (response.status === 200) {
                    setUchastkaOptionList(data)
                } else {

                }
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchDataUchastka();
    }, [])

    const [tsexSelect, setTsexSelected] = useState('');
    const [tsexOptionList, setTsexOptionList] = useState([]);
    const fetchDataTsexUchastka = (value2) => {
        axios
            .get('http://localhost:4041/api/uchastka')
            .then((response) => {
                const {data} = response;
                if (response.status === 200) {
                    setTsexOptionList(data)
                } else {

                }
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchDataTsexUchastka();
    }, [])

    const [pravilaSelect, setPravilaSelected] = useState('');
    const [pravilaOptionList, setPravilaOptionList] = useState([]);
    const fetchDataPravila = (value3) => {
        axios
            .get('http://localhost:4041/api/uchastka')
            .then((response) => {
                const {data} = response;
                if (response.status === 200) {
                    setPravilaOptionList(data)
                } else {

                }
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchDataPravila();
    }, [])

    const [narushenieSelect, setNarushenieSelected] = useState('');
    const [narushenieOptionList, setNarushenieOptionList] = useState([]);
    const fetchDataNarushenie = (value4) => {
        axios
            .get('http://localhost:4041/api/uchastka')
            .then((response) => {
                const {data} = response;
                if (response.status === 200) {
                    setNarushenieOptionList(data)
                } else {

                }
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        fetchDataNarushenie();
    }, [])

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-body">
                    <form onSubmit={handleImageUpload}>
                        <div className="form-group">
                            <input className="form-control" id="lastname" type="text"/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input className="form-control" id="firstname" type="text"/><br/>
                        </div>
                        <div className="form-group">
                            <select
                                className="form-control"
                                id="uchastka"
                                disabled={false}
                                value={uchastkaSelect}
                                onChange={(a) => setUchastkaSelected(a.currentTarget.value)}>
                                {uchastkaOptionList.map((item1) => (
                                    <option key={item1.id} value={item1.name}>
                                        {item1.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <br/>
                        <div className="form-group">
                            <select
                                className="form-control"
                                id="tsex_uchastka"
                                disabled={false}
                                value={tsexSelect}
                                onChange={(b) => setTsexSelected(b.currentTarget.value)}>
                                {tsexOptionList.map((item2) => (
                                    <option key={item2.id} value={item2.name}>
                                        {item2.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <br/>
                        <div className="form-group">
                            <select
                                className="form-control"
                                id="pravila"
                                disabled={false}
                                value={narushenieSelect}
                                onChange={(c) => setNarushenieSelected(c.currentTarget.value)}>
                                {narushenieOptionList.map((item3) => (
                                    <option key={item3.id} value={item3.name}>
                                        {item3.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <br/>
                        <div className="form-group">
                            <select
                                className="form-control"
                                id="narushenie"
                                disabled={false}
                                value={pravilaSelect}
                                onChange={(d) => setPravilaSelected(d.currentTarget.value)}>
                                {pravilaOptionList.map((item4) => (
                                    <option key={item4.id} value={item4.name}>
                                        {item4.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input className="form-control" id="fileInput" type="file"/>
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
        </div>
    );
};
export default CreateEmplNarushenie;


