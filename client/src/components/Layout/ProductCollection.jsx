import React from "react";

export default function ProductCollection() {
  return (
    <>
      <div className="product-container container-fluid my-5">
        <div className="text-center p-3">
          <h3>Featured Product</h3>
        </div>

        <div className="row justify-content-center">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card w-100">
              <img
                className="card-img-top"
                src="https://www.innisfree.com/my/en/resources/upload/product/35629_l.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text  text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card w-100">
              <img
                className="card-img-top"
                src="https://www.innisfree.com/my/en/resources/upload/product/35629_l.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text  text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card w-100">
              <img
                className="card-img-top"
                src="https://www.innisfree.com/my/en/resources/upload/product/35629_l.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text  text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center">
            <div className="card w-100">
              <img
                className="card-img-top"
                src="https://www.innisfree.com/my/en/resources/upload/product/35629_l.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text  text-center">

                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Row */}
        <div className="row">
          <div className="col-12 d-flex justify-content-center my-5">
            <button className="viewAll btn btn-primary p-2">
              View Products
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
