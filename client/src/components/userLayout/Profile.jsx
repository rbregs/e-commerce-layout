import React from 'react';
import UserLayout from './UserLayout';

export default function Profile() {
  return (
    <UserLayout>
      <div className="row">
        <div className="col-md-4 text-center">
          <figure className="border mx-5 my-5 rounded-circle" style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
            <img
              className="img-fluid"
              src="../public/images/avatar.png"
              alt="User Avatar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // This keeps the image aspect ratio while filling the container
              }} 
            />
          </figure>
        </div>

        <div className="col-md-8">
          <h4>Full Name</h4>
          <p>John Doe</p>
          <hr />

          <h4>Email Address</h4>
          <p>123@gmail.com</p>
          <hr />

          <h4>Joined On</h4>
          <p>Created @12-16</p>
        </div>
      </div>
    </UserLayout>
  );
}
