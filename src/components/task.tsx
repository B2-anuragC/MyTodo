function Task() {
  return (
    // <div className="row">
    //   <div className="col-1">
    //     <input
    //       className="form-check-input"
    //       type="checkbox"
    //       value=""
    //       id="flexCheckDefault"
    //     ></input>
    //   </div>
    //   <div className="col-9">
    //     <p className="fs-4">Task Name</p>
    //   </div>
    //   <div className="col-1 fs-4 mb-3">
    //     <i className="bi bi-pen"></i>
    //   </div>
    //   <div className="col-1 fs-4 mb-3">
    //     <i className="bi bi-archive"></i>
    //   </div>
    // </div>
    <div className="hstack gap-3">
      <input
        className="form-control me-auto"
        type="text"
        placeholder="Add your item here..."
        aria-label="Add your item here..."
      ></input>
      <button type="button" className="btn btn-secondary">
        Submit
      </button>
      <div className="vr"></div>
      <button type="button" className="btn btn-outline-danger">
        Reset
      </button>
    </div>
  );
}

export default Task;
