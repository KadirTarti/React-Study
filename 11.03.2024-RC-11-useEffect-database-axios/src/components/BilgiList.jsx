import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const BilgiList = ({tutorials, deleteTutorial}) => {

  //DELETE
  // const deleteTutorial = async (id)=>{
  //   await axios.delete(`${URL}/${id}/`)
  // }


  // bootstrapten hareketli bir yapı olan modal kullanacağım için index.html e bootstrap in script etiketini ekledik
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map(({id, title,description}) => {
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description} </td>
                <td className="text-center ">
                <AiFillDelete type='button' 
                className='text-danger me-4 fs-5'
                onClick={()=>deleteTutorial(id)}
                />  
                {/* burada size'ı bootstrapfs-5 ile verdim */}
                
                <FaEdit type='button' 
                className='text-success' 
                size={20}
                />

                {/* burada ise size attribute'ü ile verdim */}

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal etiketi buraya eklenebilir ya da başka comp açılıp oradan çekilir */}
   
    </div>
  )
}

export default BilgiList