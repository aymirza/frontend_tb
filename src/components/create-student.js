import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

function CreateStudent() {
    const baseURL = 'http://localhost:4040/api/students';
    const postname = useRef(null);
    const postemail = useRef(null);
    const postrollno = useRef(null);
    const postuchastka = useRef(null);

    const [postResult, setPostResult] = useState(null);

    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }
    const [select,setseelcted] = useState('');
    const [optionList,setOptionList] = useState([]);
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
    useEffect(()=>{
        fetchData();
    }, [])
    async function postData() {
        const postData = {
            name: postname.current.value,
            email: postemail.current.value,
            rollno: postrollno.current.value,
            uchastka: postuchastka.current.value,
        };
        try {
            const res = await fetch(`${baseURL}/create-student`, {
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


    return (
        <div className="card">
            <div className="card-header">
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" className="form-control" ref={postname} placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={postemail} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={postrollno} placeholder="Roll No"/>
                    </div>
                    <div className="form-group">
                        <select
                            className="form-control"
                            ref={postuchastka}
                            disabled={false}
                            value={select}
                            onChange={(e) => setseelcted(e.currentTarget.value)}>
                            {optionList.map((item)=>(
                                <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                            ))}
                        </select>

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

export default CreateStudent;
