import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Fenêtre PVC EVASION',
    img: '/img/fenetre-pvc-evasion-1595402417.jpg',
    link: '/docs/pvc-evasion',
    description: (
      <>
        Une fenêtre PVC qui associe esthétisme et très bonne isolation thermique
       
      </>
    ),
  },
  {
    title: 'Fenêtre PVC Ecrin',
    img: '/img/pvc-ecrin.jpeg',
    link: '/docs/pvc-ecrin',
    description: (
      <>
        La fenêtre PVC avec un rapport Qualité/Prix Optimal !
      </>
    ),
  },
];

function Feature({ img, title, description, link }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
            className=""
            to={link}>
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
