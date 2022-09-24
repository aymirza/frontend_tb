import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

function CreateNarushenie() {
    const baseURL = 'http://localhost:4040/api/emplnaruhsenie';
    const postlastname = useRef(null);
    const postfirstname = useRef(null);
    const postuchastka = useRef(null);
    const posttsex_uchastka = useRef(null);
    const postpravila = useRef(null);
    const postnarushenie = useRef(null);
    const postimage = useRef(null);

    const [postResult, setPostResult] = useState(null);

    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }


    async function postData() {
        const postData = {

            firstname: postfirstname.current.value,
            image: postimage.current.value,
            lastname: postlastname.current.value,
            uchastka: postuchastka.current.value,
            tsex_uchastka: posttsex_uchastka.current.value,
            pravila: postpravila.current.value,
            narushenie: postnarushenie.current.value,

        };
        try {
            const res = await fetch(`${baseURL}/create-empl-naruhsenie`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": "token-value",
                },
                body: JSON.stringify(postData)
            });
            if (!res.ok) {
                const message = `An error has occurend: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            const data = await res.json();

            const result = {
                status: res.status + "-" + res.statusText,
                headers: {
                    "Content-Type": res.headers.get("Content-Type"),
                    "Content-Length": res.headers.get("Content-Length"),
                },
                data: data,
            };
            setPostResult(fortmatResponse(result));
        } catch (err) {
            setPostResult(err.message);
        }
    }

    const clearPostOutput = () => {
        setPostResult(null);
    }

    const [uchastkaSelect, setUchastkaSelected] = useState('');
    const [uchastkaOptionList, setUchastkaOptionList] = useState([]);
    const fetchDataUchastka = (value1) => {
        axios
            .get('http://localhost:4040/api/empl/uchastka')
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
            .get('http://localhost:4040/api/emplnaruhsenie/tsexuchastka')
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
            .get('http://localhost:4040/api/emplnaruhsenie/pravila')
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
            .get('http://localhost:4040/api/emplnaruhsenie/narushenie')
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

    const [imageSelect, setImageSelected] = useState('');
    const [imageOptionList, setImageOptionList] = useState([]);
    const saveFile = (e) => {
        setImageSelected(e.target.files[0]);
        setImageOptionList(e.target.files[0].name);
    };

    // const [imageSelect, setImageSelected] = useState('');
    // const [imageOptionList, setImageOptionList] = useState([]);
    // const fetchDataImage = (value5) => {
    //     axios
    //         .get('http://localhost:4040/api/image')
    //         .then((response) => {
    //             const {data} = response;
    //             if (response.status === 200) {
    //                 setImageOptionList(data)
    //             } else {
    //
    //             }
    //         })
    //         .catch((error) => console.log(error));
    // };
    // useEffect(() => {
    //     fetchDataImage();
    // }, [])

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" className="form-control" ref={postlastname} placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={postfirstname} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <select
                            className="form-control"
                            ref={postuchastka}
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
                    <div className="form-group">
                        <select
                            className="form-control"
                            ref={posttsex_uchastka}
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
                    <div className="form-group">
                        <select
                            className="form-control"
                            ref={postpravila}
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
                    <div className="form-group">
                        <select
                            className="form-control"
                            ref={postnarushenie}
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
                    <div className="form-group">
                        <input
                            type="file"
                            ref={postimage}
                            onChange={saveFile}

                        />
                        {/*<select*/}
                        {/*    className="form-control"*/}
                        {/*    ref={postimage_id}*/}
                        {/*    disabled={false}*/}
                        {/*    value={imageSelect}*/}
                        {/*    onChange={(d) => setImageSelected(d.currentTarget.value)}>*/}
                        {/*    {imageOptionList.map((item5) => (*/}
                        {/*        <option key={item5.id} value={item5.image}>*/}
                        {/*            {item5.image}*/}
                        {/*        </option>*/}
                        {/*    ))}*/}
                        {/*</select>*/}
                    </div>


                    <br/>
                    <button className="btn btn-sm btn-primary" onClick={postData}>PostData</button>
                    <br/>
                    <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>Clear</button>
                    {postResult && <div className="alert alert-secondary mt-2" role="alert">
                        <pre>Saved</pre>
                    </div>}
                </div>
            </div>
        </div>
    );

}

export default CreateNarushenie;