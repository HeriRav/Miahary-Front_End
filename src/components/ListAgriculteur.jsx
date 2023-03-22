import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListAgriculteur = () => {
  const [agriculteurs, setAgriculteurs] = useState([]);

  useEffect(() => {
    const storedAgriculteurs = localStorage.getItem('agriculteurs');
    if (storedAgriculteurs && Array.isArray(JSON.parse(storedAgriculteurs))) {
      setAgriculteurs(JSON.parse(storedAgriculteurs));
    } else {
      axios.get('http://localhost:8085/api/utilisateurs/agriculteurs')
        .then(response => {
          setAgriculteurs(response.data);
          localStorage.setItem('agriculteurs', JSON.stringify(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div>
      {/* <h1>Liste des agriculteurs</h1>
      <ul>
        {agriculteurs.map((agriculteur) => (
          <li key={agriculteur.id}>{agriculteur.nomUtilisateur} - {agriculteur.email}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default ListAgriculteur;
