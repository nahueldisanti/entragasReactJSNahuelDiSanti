import './NavBar.css';
import CartWidget from '../Carrito/CartWidget.jsx';
import {NavLink} from 'react-router-dom';

function NavBar() {

  return (
    <div className="" >
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" to='/'>ALTA Llama<span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                {<NavLink className="nav-link" to="/categoria/Utensillos">Utensillos</NavLink>}
              </li>
              <li className="nav-item">
                {<NavLink className="nav-link" to="/categoria/Equipamiento">Equipamiento</NavLink>}
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>

  );
}

export default NavBar;
