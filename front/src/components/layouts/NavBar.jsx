import {Link} from 'react-router-dom'
import logo from '../../img/costs_logo.png'
import styles from './NavBar.module.css'

function NavBar(){
    return (
        <>
        <ul className={styles.navbar}>
        <li className={styles.itens}><Link to='/'>
            <img src={logo} alt="Costs" />
            </Link></li>
        <li className={styles.itens}><Link to='/'>Home</Link></li>
        <li className={styles.itens}><Link to='/contato'>Contato</Link></li>
        <li className={styles.itens}><Link to='/projetos'>Projetos</Link></li>
        <li className={styles.itens}><Link to='novoprojeto'>Novo projeto</Link></li>
      </ul>
        </>
    )
}

export default NavBar