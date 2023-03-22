import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import iconProduct from "../../../farm-products.png";
function ApprovisionnementProduitCooperative() {
  const [agriculteur, setAgriculteur] = useState('');
  const [produit, setProduit] = useState('');
  const [quantite, setQuantite] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [unite, setUnite] = useState('');
  const [categorie, setCategorie] = useState('');
  const [prix, setPrix] = useState('');


  const agriculteurs = ['Agriculteur 1', 'Agriculteur 2', 'Agriculteur 3'];
  const produits = ['Produit 1', 'Produit 2', 'Produit 3'];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici votre logique pour envoyer les données saisies à votre backend
  };

  return (
    <Container className="mt-5 mb-5">
  <h1 className="text-center">Approvisionnement</h1>
  <h2 className="text-center">
    <div className="sidebar-brand-icon">
      <img src={iconProduct} alt="Mihary" className="img-fluid" />
    </div>
  </h2>

  <Form onSubmit={handleSubmit}>
  <Row className="mt-5">
    <Form.Group as={Col} md={4} controlId="agriculteur">
      <Form.Label>Nom de l'agriculteur</Form.Label>
      <Form.Control as="select" value={agriculteur} onChange={(e) => setAgriculteur(e.target.value)}>
        <option value="">Sélectionnez un agriculteur</option>
        {agriculteurs.map((agriculteur) => (
          <option key={agriculteur} value={agriculteur}>
            {agriculteur}
          </option>
        ))}
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} md={4} controlId="produit">
      <Form.Label>Nom du produit</Form.Label>
      <Form.Control as="select" value={produit} onChange={(e) => setProduit(e.target.value)}>
        <option value="">Sélectionnez un produit</option>
        {produits.map((produit) => (
          <option key={produit} value={produit}>
            {produit}
          </option>
        ))}
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} md={4} controlId="prix">
            <Form.Label>Prix en Ar/Unité</Form.Label>
            <Form.Control
              type="text"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
          </Form.Group>
    
  </Row>

    <Row className="mt-5">
      <Form.Group as={Col} md={6} controlId="quantite">
        <Form.Label >Quantité produit</Form.Label>
        <Form.Control type="number" placeholder="Entrer la quantité" value={quantite} onChange={(e) => setQuantite(e.target.value)} />
      </Form.Group>

      <Form.Group as={Col} md={6} controlId="unite">
        <Form.Label>Unité</Form.Label>
        <Form.Control as="select" value={unite} onChange={(e) => setUnite(e.target.value)}>
          <option value="">Sélectionnez une unité</option>
          <option value="litre">Litre</option>
          <option value="kg">Kilogramme</option>
        </Form.Control>
      </Form.Group>
    </Row>

    <Form.Group controlId="description" className="mt-5">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" placeholder="Entrer la description" value={description} onChange={(e) => setDescription(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="photo" className="mt-5" md={6}>
      <Form.Label>Photo</Form.Label>
      <Form.Control type="file" onChange={(e) => setPhoto(e.target.files[0])} />
    </Form.Group>

    <Button variant="primary" type="submit" className="mt-4">
      Ajouter le produit
    </Button>
  </Form>
</Container>

);
}

export default ApprovisionnementProduitCooperative;
