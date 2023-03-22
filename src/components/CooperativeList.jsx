import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CooperativeList = () => {
  const [cooperatives, setCooperatives] = useState([]);

  useEffect(() => {
    const fetchCooperatives = async () => {
      const result = await axios.get('http://localhost:8085/api/utilisateurs/cooperatives');
      setCooperatives(result.data);
      localStorage.setItem('cooperatives', JSON.stringify(result.data));
    };
    fetchCooperatives();
  }, []);

  return (
    <div>
      {/* <h1>Liste des coopératives :</h1>
      {cooperatives.map(cooperative => (
        <div key={cooperative.id}>
          <p>Nom : {cooperative.nomUtilisateur}</p>
          <p>Email : {cooperative.emailUtilisateur}</p>
        </div>
      ))} */}
    </div>
  );
};

export default CooperativeList;
