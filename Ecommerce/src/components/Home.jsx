import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const profilePictures = {
  admin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKC2u1xrmlYviutXR9p-IM-AYHr-Se-viOg&usqp=CAU',
  user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKC2u1xrmlYviutXR9p-IM-AYHr-Se-viOg&usqp=CAU',
};

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url(https://img.freepik.com/premium-photo/top-view-online-shopping-concept-with-credit-card-smart-phone-computer-isolated-office-yellow-table-background_315337-5991.jpg)', // Replace with the actual URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };

  return (
    <div style={{ ...backgroundImageStyle, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link to="/Admin" className="profile-link">
        <div className="profile-button">
          <img src={profilePictures.admin} alt="Admin Profile" className="profile-image" />
          <button className="button-style">Admin</button>
        </div>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '150px' }}>
      <Link to="/User" className="profile-link">
        <div className="profile-button">
          <img src={profilePictures.user} alt="User Profile" className="profile-image" />
          <button className="button-style">User</button>
        </div>
      </Link>
      </div>
    </div>
  );
}
