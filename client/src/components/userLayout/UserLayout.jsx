import React from 'react';
import UserSidebar from './UserSidebar';

export default function UserLayout({children}) {

    const menuItems = [
        {
            name:"Profile",
            url:"/me/profile",
            icon:"fas fa-user"
        },
        {
            name:"Update Profile",
            url:"/me/update_profile",
            icon:"fas fa-user"
        },
        {
            name:"Update Avatar",
            url:"/me/upload_avatar",
            icon:"fas fa-user-circle"
        },
        {
            name:"Update Password",
            url:"/me/update_password",
            icon:"fas fa-lock"
        },
    ]
    
  return (
    <div className="border p-3">
      <h3 className="border mx-auto text-center w-auto">
        User Settings
      </h3>
      <div className='row'>
        <div className='col-md-3 ms-5 mx-3 border'>
            <UserSidebar menuItems={menuItems} />
        </div>
        <div className='col-md-8 border'>
          {children}
        </div>
      </div>
    </div>
  );
}
