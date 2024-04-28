function Header() {
  return (
    // <div className="row">
    //   <div className="col-10">
    //     <input
    //       className="form-control"
    //       type="text"
    //       placeholder="Default input"
    //       aria-label="default input example"
    //     ></input>
    //   </div>
    //   <div className="col-2">
    //     <button type="button" className="btn btn-info">
    //       Add
    //     </button>
    //   </div>
    // </div>
    <div className="raw mb-3">
      <div className="hstack gap-2">
        <input
          className="form-control"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
        ></input>
        <button type="button" className="btn btn-info">
          Add
        </button>
      </div>
    </div>
  );
}

export default Header;
