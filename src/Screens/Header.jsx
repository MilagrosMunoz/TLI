import logo from '../Images/logo_tli.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container py-2'>
        <div className="row align-items-center">
          <div className="col-2">
            <Link to="/"><img src={logo} alt="logo" width={150}/></Link>
          </div>
          <div className="col-8">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/servicios">Servicios</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/nosotros">Nosotros</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/blog">Blog</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contactanos">Contáctanos</Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <Link to="/">Obtener Tarifa</Link>
          </div>
        </div>  
    </div>
  )
}

export default Header
