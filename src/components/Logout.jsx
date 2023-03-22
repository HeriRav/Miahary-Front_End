import React from 'react';

const Logout = () => {

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload(); // Refresh the page to ensure all components update
  };

  return (
    <button className="btn btn-white btn-rounded px-5 button mb-3 text-bg-warning" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
