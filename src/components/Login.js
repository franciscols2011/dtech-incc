import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import { useAuth } from '../auth/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      setAuth(response.data);
      navigate('/posts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeUsername"
                      name="username"
                      className="form-control form-control-lg"
                      required
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="typeUsername">Username</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      name="password"
                      className="form-control form-control-lg"
                      required
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>
                  <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;