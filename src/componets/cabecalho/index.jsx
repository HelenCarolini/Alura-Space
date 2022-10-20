import logoLupa from './search.png'
import logoSpace from './logo-space.png'

import styles from './cabecalho.module.scss'


export default function Cabecalho () {
    
    return(
       <header className={styles.cabecalho}>
        <img src={logoSpace} alt="Logo do SpaceTime" width='300px' />
        <div className={styles.cabecalho__container}>
            <input className={styles.cabecalho__input} type="text"
            placeholder="O que você procura?" />
            <img src={logoLupa} alt="icone de Lupa" width='25px' />
        </div>


       </header>
    )
}