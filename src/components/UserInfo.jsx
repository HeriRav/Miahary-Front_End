import React, { useEffect } from 'react';
import axios from 'axios';

const UserInfo = ({ login }) => {

  useEffect(() => {
    const fetchUserInfo = async () => {
      const result = await axios.get(`http://localhost:8085/api/utilisateurs/login/{{login}}`);
      sessionStorage.setItem('username', result.data.nomUtilisateur);
      sessionStorage.setItem('userId', result.data.id);
      sessionStorage.setItem('userType', result.data.typeCompteUtilisateur);
    };
    fetchUserInfo();
  });

  return null;
};

export default UserInfo;
