import logo from '../Images/logo_tli.svg';
import calendar from '../Images/icon_button.svg'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className="container">
        <div className={styles.rowMenu}>
          <div className={styles.columnLogo}>
            <Link to="/"><img src={logo} alt="logo" width={150}/></Link>
          </div>
          <div className={styles.columnMenu}>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/servicios">Servicios</Link>
              </li>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contactanos">Contáctanos</Link>
              </li>
            </ul>
          </div>
          <div className={styles.columnButton}>
            <Link to="/"><i></i>Obtener Tarifa</Link>
          </div>
        </div>  
    </div>
  )
}

export default Header
