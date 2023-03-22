import React, { useState } from "react";
import axios from "axios";

function AjoutProduit() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8085/api/utilisateurs/email/{{email}}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Rechercher un utilisateur par email</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Rechercher</button>
      </form>
      {user && (
        <div>
          <h3>Résultat :</h3>
          <p>Id : {user.id}</p>
          <p>Nom : {user.nomUtilisateur}</p>
          <p>Prénom : {user.prenomUtilisateur}</p>
          <p>Email : {user.emailUtilisateur}</p>
          <p>Solde : {user.soldeUtilisateur}</p>
        </div>
      )}
    </div>
  );
}

export default AjoutProduit;
