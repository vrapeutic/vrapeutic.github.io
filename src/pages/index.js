import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Immersive Environments',
    imageUrl: 'img/undraw_augmented_reality_heuy.svg',
    description: (
      <>
        VRapeutic builds immersive VR experiences, with a major focus
        to instill essential life skills to children with learning difficulties 
        and developmental disorders
      </>
    ),
  },
  {
    title: 'Tracking Performance',
    imageUrl: 'img/undraw_visual_data_b1wx.svg',
    description: (
      <>
        VRapeutic helps therapists and doctors with statistics and performance data
        provided within a cloud-based platform
      </>
    ),
  },
  {
    title: 'Rich Up-to-date Blog',
    imageUrl: 'img/undraw_online_articles_79ff.svg',
    description: (
      <>
        VRapeutic keeps its blog's content up-to-date with its latest research in AI, education, and therapy
      </>
    ),
  },
  {
    title: 'AI & Biosensors',
    imageUrl: 'img/undraw_programmer_imem.svg',
    description: (
      <>
        VRapeutic employs cutting edge technologies in AI and bio-sensors technology to
        its therapeutic solutions
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
