import imgRegister from './register.svg';
import './Login&signUp.css';

const SingUp = () => {
    return (
        <div className="container1">
        <div className="forms-container1">
          <div className="signin-signup">
              <form action="#" className="sign-in-form">
              <h2 className="title">Crear cuenta</h2>
              <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Nombre usuario" />
              </div>
              <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Correo" />
              </div>
              <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Contraseña" />
              </div>
              <input type="submit" className="btn" value="Crear cuenta" />
              <p className="social-text">Encuentranos en nuestras redes sociales</p>
              <div className="social-media">
                  <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                  <i className="fab fa-youtube"></i>
                  </a>
              </div>
              </form>
          </div>
       </div>
  
       <div className="panels-container1">
          <div className="panel left-panel">
              <div className="content">
              <h3>¿ Uno de nosotros?</h3>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
              </p>
              <button className="btn" id="sign-in-btn">
                  Iniciar sesión
              </button>
              </div>
              <img src={imgRegister} className="image" alt="imagen del registro" />
          </div>
        </div>
      </div>
    );
}
export default SingUp;