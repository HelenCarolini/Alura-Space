import banner from './banner.png';



import Cabecalho from "../../componets/cabecalho";
import Menu from "../../componets/Menu";

import styles from './PaginaInicial.module.scss';
import Footer from '../../componets/Footer';
import Galeria from '../../componets/galeria';


export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />

            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem banner"  />
                    </div>
                </section>
            </main>
            <div className={styles.galeria}>
                <Galeria />
            </div>
            <Footer />
            


        </>

    )
}