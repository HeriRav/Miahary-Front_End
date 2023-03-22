import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduit = () => {
const [approvisionnement, setApprovisionnement] = useState({
utilisateur: { id: 2 },
produit: '',
quantiteApprovisionnement: 0,
prixUnitaire: 0.00,
dateApprovisionnement: ''
});

const [produits, setProduits] = useState([]);

useEffect(() => {
    const produitsData = localStorage.getItem('produits');
    if (produitsData) {
      setProduits(JSON.parse(produitsData));
    } else {
      axios.get('http://localhost:8085/produits')
        .then(response => {
          const produitsData = response.data;
          localStorage.setItem('produits', JSON.stringify(produitsData));
          setProduits(produitsData);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);
  

const handleInputChange = event => {
const { name, value } = event.target;
setApprovisionnement({ ...approvisionnement, [name]: value });
};

const handleSelectChange = event => {
const { value } = event.target;
setApprovisionnement({ ...approvisionnement, produit: { idProduit: value } });
};

const handleSubmit = event => {
event.preventDefault();
const username = sessionStorage.getItem('username');
axios.post('http://localhost:8085/approvisionnements', { ...approvisionnement, utilisateur: { username } })
.then(response => {
console.log(response.data);
})
.catch(error => {
console.log(error);
});
};

return (
<form onSubmit={handleSubmit}>
<label>
Produit:
<select name="produit" value={approvisionnement.produit.idProduit} onChange={handleSelectChange}>
{produits.map(produit => (
<option key={produit.idProduit} value={produit.idProduit}>{produit.nom}</option>
))}
</select>
</label>
<label>
Quantité d'approvisionnement:
<input type="number" name="quantiteApprovisionnement" value={approvisionnement.quantiteApprovisionnement} onChange={handleInputChange} />
</label>
<label>
Prix unitaire:
<input type="number" step="0.01" name="prixUnitaire" value={approvisionnement.prixUnitaire} onChange={handleInputChange} />
</label>
<label>
Date d'approvisionnement:
<input type="datetime-local" name="dateApprovisionnement" value={approvisionnement.dateApprovisionnement} onChange={handleInputChange} />
</label>
<button type="submit">Créer approvisionnement</button>
</form>
);
};

export default AddProduit;