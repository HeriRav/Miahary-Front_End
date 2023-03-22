import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import UserInfo from '../components/UserInfo';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import Register from "./Register";
import { useNavigate, Link, Routes, Route } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState('');

  const change = async (e) => {
    e.preventDefault();
    const user = { username: email, password };
    try {
      const res = await axios.post("http://localhost:8085/authenticate", user);
      localStorage.setItem("token", res.data.token);
      
      //<UserInfo login={username} />
      
      sessionStorage.setItem("username", email);
      sessionStorage.setItem("token",res.data.token);
      const userType = res.data.type;
      
      setTimeout(() => {
        toast.success("Vous etes connectés");
      }, 5000);
      // Rediriger l'utilisateur en fonction du type de compte
      if (userType === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard-coop");
      }
      
      window.location.reload(true);
    } catch (err) {
      toast.error("Authentification echoués : " + err.message);
    }
    

    console.log(user);
  };
  const refresh = () => {
    navigate("/inscription");
    window.location.reload(true);
  };

  return (
    <div>
      <title>Mihary'ket - Authentification</title>
      <section className="intro">
        <div
          className="bg-image h-100"
          style={{
            backgroundImage: "url('/src/images/bg_login.jpg')",
            position: "fixed",
            minWidth: "100%",
            minHeight: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="mask d-flex align-items-center h-100"
            style={{ backgroundColor: "rgba(139, 195, 74, .6)" }}
          >
            <MDBContainer fluid data-aos="fade-right">
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12">
                  <MDBCard
                    className="gradient-custom text-white my-3"
                    style={{ borderRadius: "1rem", maxWidth: "450px" }}
                  >
                    <MDBCardBody className="p-3 d-flex flex-column align-items-center mx-auto w-100">
                      <div
                        className="d-flex flex-row ps-5 pt-5"
                        data-aos="fade-right"
                      >
                        <MDBIcon
                          fas
                          icon="fa-solid fa-tractor fa-3x"
                          style={{ color: "#fff" }}
                        />
                      </div>
                      <br />

                      <h2
                        className="fw-bold mb-2 text-uppercase"
                        data-aos="fade-right"
                      >
                        Authentification
                      </h2>
                      <p className="text-white-50" data-aos="fade-right">
                        Se connecter avec :
                      </p>

                      <div className="d-flex flex-row">
                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon
                            fab
                            icon="facebook-f"
                            size="lg"
                            style={{ cursor: "pointer" }}
                          />
                        </MDBBtn>

                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon
                            fab
                            icon="twitter"
                            size="lg"
                            style={{ cursor: "pointer" }}
                          />
                        </MDBBtn>

                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon
                            fab
                            icon="google"
                            size="lg"
                            style={{ cursor: "pointer" }}
                          />
                        </MDBBtn>
                      </div>

                      <label style={{ marginRight: "auto" }}>
                        Adresse mail
                      </label>
                      <MDBInput
                        className="input"
                        wrapperClass="mb-4 mx-5 w-100"
                        type="email"
                        size="lg"
                        placeholder="Entrez votre email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label style={{ marginRight: "auto" }}>
                        Mot de passe
                      </label>
                      <MDBInput
                        className="input"
                        wrapperClass="mb-4 mx-5 w-100"
                        type="password"
                        size="lg"
                        placeholder="Entrez votre mot de passe"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <p className="mb-3 pb-lg-2">
                        <a
                          className="text-white"
                          href="#!"
                          data-aos="fade-right"
                        >
                          Mot de passe oublié?
                        </a>
                      </p>
                      <div className="text-center" data-aos="fade-right">
                        <button
                          className="btn btn-white btn-rounded px-5 button mb-3"
                          type="submit"
                          onClick={change}
                        >
                          se connecter
                        </button>
                        <ToastContainer />
                      </div>

                      <div>
                        <p className="mb-2">
                          Pas encore de compte?{" "}
                          <Link
                            to="/inscription"
                            className="text-success fw-bold"
                          >
                            S'inscrire
                          </Link>
                        </p>
                      </div>

                      <div>
                        <p className="mb-3">
                          Retourner à l'
                          <Link
                            className="text-success fw-bold"
                            onClick={refresh}
                          >
                            Accueil
                          </Link>
                        </p>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </section>

      <Routes>
        <Route to="/inscription" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Login;
