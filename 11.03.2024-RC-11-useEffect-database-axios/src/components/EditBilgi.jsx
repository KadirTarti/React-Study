import React from 'react'

const EditBilgi = () => {
  return (
  
    <div class="modal fade" 
    id="editModal" 
    data-bs-backdrop="static" 
    data-bs-keyboard="false" 
    tabindex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true">

      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fs-5" id="exampleModalLabel">
            Modal
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            </button>
          </div>
          <div class="modal-body">

            {/* inputlar */}
            <div className='mb-3'>
              <label htmlFor="title"> Title   </label>
                <input type="text" className='fomr-control' id='title'  value={''}/>
            </div>

            <div className='mb-3'>
              <label htmlFor="desc">Description</label>
                <input type="text" id='desc' className='form-control' value={''} />
            </div>

          </div>

          <div class="modal-footer">
            <button type="button" 
            class="btn btn-success" 
            data-bs-dismiss="modal">  Save  </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBilgi