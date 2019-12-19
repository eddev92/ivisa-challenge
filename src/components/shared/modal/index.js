import React from 'react';
import '../../../styles/modal.css';

const ModalComponent = ({ changeDefault = () => {}  }) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img src="images/modal-icon.svg" />
          <span className="title-modal-body">Change default card</span>
          <p>This card will appear as a primary option for your payment. Are you sure you want to set this card as default?</p>
        </div>
        <div className="modal-footer row">
          <button type="button" className="btn btn-primary col-5 yes-btn" data-dismiss="modal" onClick={changeDefault} >Yes</button>
          <button type="button" className="btn btn-primary col-5 cancel-btn" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalComponent;
