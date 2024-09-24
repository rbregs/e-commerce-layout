import React from "react";

export default function ProductCollection() {
  return (
    <div className="product-container container-fluid">
      <div className="row">
        <div className="col-3">
          <div className="card" style={{width: "18rem;"}}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
        <div className="card" style={{width: "18rem;"}}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
        <div className="card" style={{width: "18rem;"}}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
        <div className="card" style={{width: "18rem;"}}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-2 border  d-flex justify-content-center my-5">
          <button className="viewAll p-2">this is a button</button>
        </div>
      </div>
    </div>
  );
}
