import React from 'react';
import axios from 'axios';

const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [lastname, setLastname] = React.useState(null);
  const [firstname, setFirstname] = React.useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("lastname",lastname);
    formData.append("firstname",firstname);
    // formData.append("uchastka",uchastka);
    // formData.append("tsex_uchastka",tsex_uchastka);
    // formData.append("pravila",pravila);
    // formData.append("narushenie",narushenie);
    formData.append("selectedFile", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4041/api/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name={lastname}/>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" />
    </form>
  )
};

export default Form;