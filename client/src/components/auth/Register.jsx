import React from 'react';
import { Link } from "react-router-dom"


export default function Register() {
  return (
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="email" 
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-block">Login</button>
                </div>

                <div className="d-grid text-center mt-2">
                  <h6>Already have an account? <Link to ="/login">Login</Link></h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
