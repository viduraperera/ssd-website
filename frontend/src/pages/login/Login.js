import React from "react";
import '../login/Login.css';


const Login = () => {
    return ( 
        <section className="content">
            <div className="registration-form">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="fw-bold mb-3">Login to the Account</h2>
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$"
                                        placeholder="test@gmail.com"
                                        className="form-control" required />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        className="form-control" 
                                        placeholder="*************"
                                        required />
                                </div>
                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                            <label className="form-check-label" for="form2Example31"> Remember me </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>    
                                    <button type="submit" className="btn btn-primary btn-block mb-4 btnLogin">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                </div>
            </section>
     );
}
 
export default Login;