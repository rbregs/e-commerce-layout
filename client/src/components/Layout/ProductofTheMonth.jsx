import React from "react";

export default function ProductofTheMonth() {
  return (
    <div className="container-fluid my-5">
      <div className="text-center">
        <h1>Best Seller of the Month</h1>
        <div className="row my-5">
          <div className="col-6 border">this is for image</div>
          <div className="col-6 border">
            <div className="d-flex text-start flex-column"> 
              <h4>SAMPLE NAME OF THE PRODUCT SAMPLE NAME OF THE PRODUCT</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, corrupti! Sequi omnis quo facilis voluptatem amet quos commodi aliquam enim nemo odit, mollitia minus aliquid saepe illo porro modi sapiente.
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
                <li className="my-1">sample</li>
              </p>
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
