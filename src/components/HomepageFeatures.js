import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Fenêtre PVC EVASION',
    img: '/produits/img/fenetre-pvc-evasion-1595402417.jpg',
    description: (
      <>
        Une fenêtre PVC qui associe esthétisme et très bonne isolation thermique
       
      </>
    ),
  },
  {
    title: 'Fenêtre PVC Ecrin',
    img: '/produits/img/pvc-ecrin.jpeg',
    description: (
      <>
        La fenêtre PVC avec un rapport Qualité/Prix Optimal !
      </>
    ),
  },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
            className=""
            to="/docs/pvc-ecrin">
            Découvrir
          </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {

  return (
    <section className={styles.features}>
     
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
