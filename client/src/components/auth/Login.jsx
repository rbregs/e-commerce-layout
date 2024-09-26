import React from 'react';
import { Link } from "react-router-dom"


export default function Login() {
  return (
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter your password"
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-block">Login</button>
                </div>

                <div className="d-grid text-center mt-2">
                  <h6>don't have an account? <Link to ="/register">Register</Link></h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
