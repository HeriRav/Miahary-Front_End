import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProduitsList = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/produits/list')
      .then(response => {
        setProduits(response.data);
        localStorage.setItem('produits', JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* <h2>Liste des produits</h2>
      <ul>
        {produits.map(produit => (
          <li key={produit.idProduit}>
            {produit.nomProduit} - {produit.prixProduit} €
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProduitsList;
