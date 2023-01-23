import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('container', styles.heroBanner)}>
      <div className="row padding-horiz--md">
        <div className="col col--7">
          <div className={clsx(styles.relative, 'row')}>
            <div className="col">
              <h1 className={styles.tagline}>
              Вы много чего не знаете о наших ботах
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>А эта wiki поможет вам разобраться</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.heroButtons}>
                <Link to="docs/intro" className={styles.getStarted}>
                  Начнём
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.relative, 'col', 'col--5')}>
          <div className={styles.logoBlur}>
            <img
              src={require('../../static/img/logo-blur.png').default}
              className={clsx(styles.hideSmall)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Привет ${siteConfig.title}`}>
      <HomepageHeader />
    </Layout>
  );
}
