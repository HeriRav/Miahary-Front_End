const Footer = () => {
    return(
        <>
            <div className="footer">
                <div className="container">
                    <div className="row mb-4">
                    <div className="col-lg-3">
                        <p className="mb-4"><img src="mihary_logo_dark.png" alt="Image" width="50%" className="img-fluid"/></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>  
                        <p><a href="#">Plus</a></p>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="footer-heading"><span>Notre Compagnie</span></h3>
                        <ul className="list-unstyled">
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Nouveautés</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Notre Équipe</a></li>
                        <li><a href="#">Carrières</a></li>
                        <li><a href="#">Projets</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="footer-heading"><span>Nos Services</span></h3>
                        <ul className="list-unstyled">
                        <li><a href="#">Paillage</a></li>
                        <li><a href="#">Labour</a></li>
                        <li><a href="#">Plantation</a></li>
                        <li><a href="#">Arrosage</a></li>
                        <li><a href="#">Ensemence</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="footer-heading"><span>Contact</span></h3>
                        <ul className="list-unstyled">
                        <li><a href="#">Centre d'aide</a></li>
                        <li><a href="#">Communauté</a></li>
                        <li><a href="#">Presse</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Nos Partenaires</a></li>
                        </ul>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-12">
                        <div className="copyright border-top pt-4">
                        <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>. Tous droits réservés. &mdash; Conçu pour le projet final de la formation chez <a href="https://www.inclusiv.mg/" target="_blank">Inclusiv Academy</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer