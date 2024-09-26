import React from "react";

export default function ProductofTheMonth() {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1>Best Seller of the Month</h1>
        <div className="row my-5">
          {/* Adjust column sizes for responsive behavior */}
          <div className="col-lg-6 col-md-12 border mb-4">
            {/* Placeholder for image */}
            <img src="path-to-image.jpg" alt="Product" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-12 border">
            <div className="d-flex flex-column text-start">
              {/* Responsive font size classes */}
              <h4 className="fs-1 fs-md-3">SAMPLE NAME OF THE PRODUCT</h4>
              <p className="fs-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sequi omnis quo facilis voluptatem amet quos commodi aliquam 
                nemo odit, mollitia minus aliquid saepe illo porro modi sapiente.
              </p>
              <ul>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
              </ul>
              <div>
                <button className="w-100 p-2">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
