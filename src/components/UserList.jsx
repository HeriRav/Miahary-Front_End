import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get('http://localhost:8085/api/utilisateurs/list');
      setUsers(result.data);
      localStorage.setItem('users', JSON.stringify(result.data));
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {/* <h1>Liste des utilisateurs :</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>Nom : {user.nomUtilisateur}</p>
          <p>Email : {user.emailUtilisateur}</p>
        </div>
      ))} */}
    </div>
  );
};

export default UserList;
