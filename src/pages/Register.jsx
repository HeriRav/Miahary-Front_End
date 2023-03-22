import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import '../css/register-style.css'
import Login from './Login';
import React from 'react';
import Register_client from './Register-client';
import Register_coop from './Register-coop';

function Register() {
    const navigate = useNavigate()
    const refresh = () => {
        navigate('/')
        window.location.reload(true)
    }

    return (
      <div>
      <title>Mihary'ket - Inscription</title>
      <section className="vh-100 bg-image"
        style={{backgroundImage : 'url(/src/images/hero_6.jpg)', overflowY : "hidden !important"}}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100" data-aos="fade">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card text-black" style={{borderRadius : '15px'}}>

                                <div className="card-body p-5 text-black" data-aos="fade-up">
                                <h2 className="text-uppercase text-center mb-5">S'inscrire en tant que</h2>

                                    <form>

                                        <div className="d-flex justify-content-center" data-aos="fade-up">
                                            <Link to='/inscription-coop' className="btn-block text-body"><button type="button"
                                                className="btn btn-success btn-block btn-rounded btn-lg gradient-custom-4 px-5 text-white" style={{borderRadius : "2em"}}>Coopérative</button></Link>
                                        </div><br/>

                                        <div className="d-flex justify-content-center" data-aos="fade-up">
                                            <Link id="registerClient" to="/inscription-client" className="btn-block text-body"><button type="button"
                                                className="btn btn-success btn-block btn-rounded btn-lg gradient-custom-4 px-5 text-white" style={{borderRadius : "2em"}}>Client</button></Link>
                                        </div>

                                        <p className="text-center text-black mt-5 mb-0" data-aos="fade-up">Déjà inscrit? <Link to="/authentification"
                                            className="fw-bold text-primary">Se connecter</Link></p>
                                        
                                        <div className="text-center text-black mt-4 mb-0" data-aos="fade-up" style={{marginLeft : '2%', marginTop : '2%'}}>
                                            <Link className="text-black fw-bold" onClick={refresh}>Retourner à l'accueil</Link>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Routes>
          <Route to="/authentification/*" element={<Login />}/>
          <Route to="/inscription-coop/*" element={<Register_coop />}/>
          <Route to="/inscription-client/*" element={<Register_client />}/>
        </Routes>
      </div>
    )
  }
  
export default Register