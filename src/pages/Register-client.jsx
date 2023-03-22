import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Register_client() {
    const [nomUtilisateur, setLName] = useState('')
    const [prenomUtilisateur, setFName] = useState('')
    const [adresseUtilisateur, setAdress] = useState('')
    const [email, setEmail] = useState('')
    const [telephoneUtilisateur, setPhone] = useState('')
    const [mdpUtilisateur, setPass] = useState('')
    const [confirmMdp, setConfirm] =useState('')
    const [login, setLogin] = useState('')
    const [typeUtilisateur] = useState('CLIENT')
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        if (validate()) {
            const user = {nomUtilisateur, login : email, prenomUtilisateur, adresseUtilisateur, email, telephoneUtilisateur, mdpUtilisateur, typeUtilisateur}
            fetch("http://localhost:8085/api/utilisateurs/ajout", {
                method:"POST", headers:{"Content-Type" : "application/json"}, body:JSON.stringify(user)
            }).then(() => {
                setTimeout(() => {
                    toast.success('Votre compte a été enregistré avec succès')
                }, 5000)
                navigate('/')
                window.location.reload(true)
            }).catch((err) => {
                toast.error('Inscription échouée : ' +err.message)
            })
            console.log(user)
        }
    }

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

    const refresh = () => {
        navigate('/inscription')
        window.location.reload(true)
    }
    return (
        <div>
            <title>Mihary'ket - Inscription client</title>
            <section className="vh-100 bg-image"
                style={{backgroundImage : "url(/src/images/hero_6.jpg)"}}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100 go-right" data-aos="fade-up">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card space-card" style={{borderRadius : '15px'}}>

                                    <div className="card-body"  style={{padding : "2.5em"}}>
                                    <h4 className="text-uppercase text-center mb-5">Inscription en tant que client</h4>

                                        <form>

                                            <div className="row mb-4">
                                                <div className="col-md-6 pb-2">
                                                    <div className="form-outline">
                                                    <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Nom</label>
                                                    <input type="text" id="registerLName" className="form-control" required="required"
                                                    value={nomUtilisateur} onChange={(e) => setLName(e.target.value)} placeholder="Votre nom"/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 pb-2">
                                                    <div className="form-outline">
                                                    <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Prénom</label>
                                                    <input type="text" id="registerFName" className="form-control" required="required"
                                                    value={prenomUtilisateur} onChange={(e) => setFName(e.target.value)} placeholder="Votre prénom"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col-md-6 pb-2">
                                                    <div className="form-outline">
                                                    <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Adresse mail</label>
                                                    <input type="email" id="registerEmail" className="form-control" required="required"
                                                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre adresse mail"/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 pb-2">
                                                    <div className="form-outline">
                                                    <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Contact</label>
                                                    <input type="tel" id="registerContact" className="form-control" required="required"
                                                    value={telephoneUtilisateur} onChange={(e) => setPhone(e.target.value)} placeholder="Votre contact"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                            <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Adresse</label>
                                            <input type="text" id="registerAddress" className="form-control" required="required"
                                            value={adresseUtilisateur} onChange={(e) => setAdress(e.target.value)} placeholder="Votre adresse"/>
                                            </div>

                                            <div className="row mb-4">
                                                <div className="col-md-6 pb-2">
                                                    <div className="form-outline">
                                                    <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Mot de passe</label>
                                                    <input type="password" id="registerPass1" className="form-control" required="required"
                                                    value={mdpUtilisateur} onChange={(e) => setPass(e.target.value)} placeholder="Votre mot de passe"/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 pb-2">
                                                    <div className="form-outline">
                                                    <label style={{marginRight : "auto", fontSize : "16px", color : "black"}}>Confirmer Mot de passe</label>
                                                    <input type="password" id="registerPass2" className="form-control" required="required"
                                                    value={confirmMdp} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirmation mdp"/>
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
                                                className="btn btn-success btn-rounded btn-lg gradient-custom-4 px-5 text-white"
                                                onClick={handleClick}
                                                >S'inscrire</button>
                                                <ToastContainer />
                                            </div>

                                            <p className="text-center text-muted mt-4 mb-0">Déjà inscrit? <Link id="loginLink" to="/authentification"
                                                className="text-primary fw-bold">Se connecter</Link></p>

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
                <Route to="/" element={<Home />}/>
            </Routes>
        </div>
    )
}
  
export default Register_client