import React from 'react'
import axios from "axios"
const EditBilgi = ({item,setItem,getTutorials}) => {
  const{id,title,description}=item


  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
 


  const putTutorial=async(eleman)=>{
await axios.put(`${url}${eleman.id}/`,eleman)

getTutorials()


  }

  return (
    <div
      className="modal fade"
      id="editModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-5" id="exampleModalLabel">
              Modal
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* inputlar  */}
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title || ""}
                onChange={(e) => setItem({ ...item, title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc">Description</label>
              <input
                type="text"
                id="desc"
                className="form-control"
                value={description || ""}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={()=>putTutorial(item)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBilgi