import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import iconProduct from "../../../farm-products.png";

function AjouterProduit() {
 
  const [produit, setProduit] = useState("");
  const [description, setDescription] = useState("");
  const [categorie, setCategorie] = useState("");
  const [resultats, setResultats] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nouveauProduit = {
      produit: produit,
      categorie: categorie,
      description: description
    };
    setResultats([...resultats, nouveauProduit]);
    setProduit("");
    setCategorie("");
    setDescription("");
  };

  // Filtrer les résultats en fonction de la recherche
  const filteredResults = resultats.filter(
    (resultat) =>
      resultat.produit.toLowerCase().includes(recherche.toLowerCase()) ||
      resultat.categorie.toLowerCase().includes(recherche.toLowerCase()) ||
      resultat.description.toLowerCase().includes(recherche.toLowerCase())
  );

  // Obtenir le nombre total de pages
  const totalPages = Math.ceil(filteredResults.length / productsPerPage);

  // Obtenir les résultats pour la page actuelle
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredResults.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    
<Container className="mt-5 mb-5">
      <h1 className="text-center mt-5">Liste des produits</h1>
      <h2 className="text-center">
        <div className="sidebar-brand-icon">
          <img src={iconProduct} alt="Mihary" className="img-fluid" />
        </div>
      </h2>
      <Row className="mt-4 mb-4">
        <Col md={{ span: 4, offset: 8 }}>
          <Form.Control
            type="text"
            placeholder="Rechercher un produit"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom du produit</th>
            <th>Catégorie</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((resultat, index) => (
            <tr key={index}>
              <td>{resultat.produit}</td>
              <td>{resultat.categorie}</td>
              <td>{resultat.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3 className=" mt-5" >Ajout nouveau produit</h3>
      

      <Form onSubmit={handleSubmit}>
        <Row className="mt-5">
          <Form.Group as={Col} md={4} controlId="produit">
            <Form.Label>Nom du produit</Form.Label>
            <Form.Control
              type="text"
              value={produit}
              onChange={(e) => setProduit(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} md={4} controlId="categorie">
            <Form.Label>Catégorie</Form.Label>
            <Form.Control
              as="select"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="legume">Légume</option>
              <option value="fruit">Fruit</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md={8} controlId="description" className="mt-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Entrer la description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Button variant="primary" type="submit" className="mt-4">
              Ajouter
            </Button>
          </Col>
        </Row>
      </Form>

      
    </Container>
  );
}

export default AjouterProduit;
