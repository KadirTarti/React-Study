import React, { useState } from 'react'

const AddBilgi = ({postalaTutorial}) => {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit =(e)=>{
    e.pereventDefault()

    //! home'da yazığımız fonk buraya getirdik. postalaTutorial. alttakiler sanki burada tanımlanmış gibi oldu.
    // const postalaTutorial = async (yeniVeri) => {
    //   await axios.post(URL, yeniVeri)
    // }

    postalaTutorial({title:title,description:desc});

    //&database'e yolla: 
    // axios.post(URL, title:title, description: desc)
    //     .then(response => setTutorials(response));
    //burada url yi setTutorials'ı vs ÇEKEMEYİZ... o nedenle HOME'da yapacağız POST'u
 
  }


  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            required
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            required
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBilgi