import React from 'react'

import Tags from '../../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'


import favorito from './favorito.png';
import open from './open.png';




export default function Galeria ()  {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.galeria__lista}>{fotos.map((foto) => {
        return (
         <div>
          
         </div>
        )
      })}</ul>
    </section>
  )
}


