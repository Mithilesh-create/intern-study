function Modal(props) {
  return (
    <div className="modal">
      <div className="mainAreaModal">
        <span>Are you sure you want to delete this item?</span>
        <div>
          <button onClick={props.onCloseModal}>Cancel</button>
          <button onClick={props.onCloseModal}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
