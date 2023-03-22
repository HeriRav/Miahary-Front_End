import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


function Vitrine() {

const produits = [
    { id: 1, nom: 'Produit 1', prix: 10 },
    { id: 2, nom: 'Produit 2', prix: 20 },
    { id: 3, nom: 'Produit 3', prix: 30 },
    { id: 4, nom: 'Produit 4', prix: 40 },
];

return (
    <Container>
        <h1 className="text-center my-5">Vitrine</h1>
        <Row xs={1} md={2} lg={4} className="g-4">
            {produits.map(produit => (
                <Col key={produit.id}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/300" />
                        <Card.Body>
                            <Card.Title>{produit.nom}</Card.Title>
                            <Card.Text>
                                {produit.prix}€
                            </Card.Text>
                            <Button variant="primary">Supprimer</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);
}

export default Vitrine;

