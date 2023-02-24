import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Fenêtre PVC EVASION',
    img: '/produits/img/fenetre-pvc-evasion-1595402417.jpg',
    description: (
      <>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
      </>
    ),
  },
  {
    title: 'Fenêtre PVC Ecrin',
    img: '/produits/img/pvc-ecrin.jpeg',
    description: (
      <>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
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
