import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Register_coop() {
    const [nomUtilisateur, setLName] = useState('')
    const [prenomUtilisateur, setFName] = useState('')
    const [adresseUtilisateur, setAdress] = useState('')
    const [email, setEmail] = useState('')
    const [telephoneUtilisateur, setPhone] = useState('')
    const [mdpUtilisateur, setPass] = useState('')
    const [confirmMdp, setConfirm] =useState('')
    const [login, setLogin] = useState('')
    const [typeUtilisateur] = useState('COOP')

    const validate = () => {
        let result = true
        if (nomUtilisateur === '' || nomUtilisateur === null) {
            result = false
            toast.warning('Veuillez entrer votre nom')
        }
        if (prenomUtilisateur === '' || prenomUtilisateur === null) {
            result = false
            toast.warning('Veuillez entrer votre prénom')
        }
        if (adresseUtilisateur === '' || adresseUtilisateur === null) {
            result = false
            toast.warning('Veuillez entrer votre adresse')
        }
        if (email === '' || email === null) {
            result = false
            toast.warning('Veuillez entrer votre adresse mail')
        }
        if (telephoneUtilisateur === '' || telephoneUtilisateur === null) {
            result = false
            toast.warning('Veuillez entrer votre numéro de téléphone')
        }
        if (mdpUtilisateur === '' || mdpUtilisateur === null) {
            result = false
            toast.warning('Veuillez entrer votre mot de passe')
        }
        if (confirmMdp === '' || confirmMdp === null) {
            result = false
            toast.warning('Veuillez confirmer votre mot de passe')
        }
        if (mdpUtilisateur !== confirmMdp){
            result = false
            toast.warning('Les mots de passe ne correspondent pas')
        }
        return result
    }

    const navigate = useNavigate()
    const refresh = () => {
        navigate('/inscription')
        window.location.reload(true)
    }
    return (
        <div>
        <title>Mihary'ket - Inscription coopérative</title>
        <section className="vh-100 bg-image"
            style={{backgroundImage : "url(/src/images/hero_6.jpg)", overflowY : "hidden"}}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 go-right" data-aos="fade-up">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card space-card" style={{borderRadius : '15px'}}>

                                <div className="card-body p-4">
                                <h4 className="text-uppercase text-center mb-5">Inscription en tant que coopérative</h4>

                                    <form>

                                        <div className="form-outline mb-4">
                                        <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Nom de la coopérative</label>
                                        <input type="text" id="registerName" className="form-control" required="required"
                                        value={nomUtilisateur} onChange={(e) => {setLName(e.target.value)}} placeholder='Votre nom'/>
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Adresse</label>
                                        <input type="text" id="registerName" className="form-control" required="required" placeholder='Votre adresse'/>
                                        </div>

                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Numéro d'identité fiscale</label>
                                                <input type="text" id="registerAddress" className="form-control" required="required" maxLength={10} placeholder='Votre NIF'/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Numéro statistique</label>
                                                <input type="text" id="registerEmail" className="form-control" required="required" maxLength={17} placeholder='Votre STAT'/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                        <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Nom du responsable</label>
                                        <input type="text" id="registerContact" className="form-control" required="required" placeholder='Le nom de votre responsable'/>
                                        </div>

                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Contact</label>
                                                <input type="text" id="registerPass1" className="form-control" required="required" placeholder='Votre contact'/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Email</label>
                                                <input type="email" id="registerPass2" className="form-control" required="required" placeholder='Votre adresse mail'/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Mot de passe</label>
                                                <input type="password" id="registerPass1" className="form-control" required="required" placeholder='Votre mot de passe'/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-outline">
                                                <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Confirmer Mot de passe</label>
                                                <input type="password" id="registerPass2" className="form-control" required="required" placeholder='Confirmation mdp'/>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="form-check d-flex justify-content-center mb-5" data-aos="fade-up">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            J'ai lu et accepté les <a href="#!" className="text-body"><u>Termes et conditions d'utilisation</u></a>
                                        </label>
                                        </div> */}

                                        <div className="d-flex justify-content-center">
                                        <button type="button"
                                            className="btn btn-success btn-rounded btn-lg gradient-custom-4 px-5 text-white">S'inscrire</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Déjà inscrit? <Link id="loginLink" to="/authentification"
                                            className="fw-bold text-primary">Se connecter</Link></p>

                                        <div className="text-center text-muted mt-4 mb-0" style={{marginLeft : '2%', marginTop : '2%'}}>
                                            <Link className="text-primary fw-bold" onClick={refresh}>Retour</Link>
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
        </Routes>
      </div>
    )
  }
  
export default Register_coop