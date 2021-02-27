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
        VRapeutic employs cutting edge technologies in Artificial Intelligence and biosensors technology to
        its therapeutic solutions
      </>
    ),
  },
];

const sponsors = [
  {
    title: 'Flat6Labs Cairo',
    imageUrl: 'img/falt6labs.png'
  },
  {
    title: 'UNICEF Innovation Fund',
    imageUrl: 'img/unicef-for-every-child-logo.png'
  },
  {
    title: 'MakerLaunch',
    imageUrl: 'img/makerlaunch.png'
  },
  {
    title: 'Singularity University',
    imageUrl: 'img/singularity-university-new-logo.png'
  },
]

const team = [
  {
    thumbnail: 'img/team/img_avatar.png',
    name: 'Alaa Hesham',
    title: 'Machine Learning Engineer'
  },
  {
    thumbnail: 'img/team/img_avatar.png',
    name: 'Hadeer Gamal',
    title: 'XR Developer'
  },
  {
    thumbnail: 'img/team/img_avatar.png',
    name: 'Taghreed Reda',
    title: 'XR Developer'
  },
  {
    thumbnail: 'img/team/img_avatar.png',
    name: 'Mahmoud Mousa',
    title: 'VR Specialist'
  },
  {
    thumbnail: 'img/team/img_avatar.png',
    name: 'Ahmed Al Assasy',
    title: 'XR Developer'
  },
  {
    thumbnail: 'img/team/img_avatar.png',
    name: 'Yahya Alaa',
    title: 'Cheif Technology Officer'
  },
]

function TeamMember({thumbnail, title, name}) {
  const imageUrl = useBaseUrl(thumbnail);
  return (
    <div className={clsx('col col--4')}>
      {thumbnail && (
        <div className="text--center">
          <img className={styles.teamMemberImg} src={imageUrl} alt={name} />
          <div className="avatar__intro padding-top--sm">
            <h4 className="avatar__name">{name}</h4>
            <small className="avatar__subtitle">{title}</small>
          </div>
        </div>
      )}
    </div>
  )
}

function Sponsor({imageUrl, title}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3')}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.sponsorImage} src={imgUrl} alt={title} />
          <br></br>
        </div>
      )}
    </div>
  )
}

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
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={styles.heroProjectTagline}>
              <img
                alt="logo"
                className={styles.heroLogo}
                src={useBaseUrl('/img/vrapeutic-logo.ico')}
              />
              <span className={styles.heroTitleTextHtml}>
                <br></br>
                <b>{siteConfig.title}</b>
                <br></br>
                <small>{siteConfig.tagline}</small>
                <br></br>
                <div className={styles.buttons}>
                  <Link
                    className={clsx(
                      'button button--primary button--lg',
                    )}
                    to={useBaseUrl('docs/')}>
                    <span className={styles.getStartedBtn}>Explore Docs</span>
                  </Link>
                </div>
              </span>
          </h1>
        </div>
      </header>
      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          {sponsors && sponsors.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {sponsors.map((props, idx) => (
                    <Sponsor key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
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
      {/* <div className={clsx(styles.team)}>
        <h1><b>VRapeutic's Team</b></h1>
        <div className={styles.announcementInner}>
          {team && team.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {team.map((props, idx) => (
                    <TeamMember key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div> */}
    </Layout>
  );
}

export default Home;
