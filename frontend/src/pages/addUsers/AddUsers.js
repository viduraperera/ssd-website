import React from "react";
import "../addUsers/AddUsers.css";

const AddUsers = () => {
    return ( 
        <section className="content">
            <div className="registration-form">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-3">Add New Users</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label">First name</label>
                                                <input type="text" id="form3Example1" className="form-control" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">                                                
                                                <label className="form-label">Last name</label>
                                                <input type="text" id="form3Example2" className="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label">Username</label>
                                        <input type="Username" id="Username" className="form-control" required />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label">Email address</label>
                                        <input type="email" id="form3Example3" className="form-control" required />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label">Role</label>
                                        <input type="Role" id="Role" className="form-control" required />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label">Password</label>
                                        <input type="password" id="form3Example4" className="form-control" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-4 btnNewUser">
                                    Add New User
                                    </button>
                                </form>
                            </div>
                        </div>
                </div>
            </section>
     );
}
 
export default AddUsers;