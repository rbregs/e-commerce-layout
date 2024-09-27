import React from 'react'
import UserLayout from './UserLayout'

export default function UpdateProfile() {
  return (
   <>
         <UserLayout>
        <div className="updatePassword-wrapper">
          <div className="updatePassword-container">
            <div className="updatePassword-title">
              <form action="#" method="post" >
                <h2>Update Profile</h2>
                <div className="">
                  <label htmlFor="old_password_field">Old Password</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="new_password_field">New Password</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    name="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button type="submit" className="updatePassword-btn">
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </UserLayout>
   </>
  )
}
