import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link";

const BrowseList = [
  {
    title: 'Getting Started',
    description: (
      <>
        Getting Started
      </>
    ),
    link: '/docs/category/getting-started',
  },
  {
    title: 'Authentication',
    description: (
      <>
        A process of verifying the identity.
      </>
    ),
    link: '/docs/category/authentication',
  },
  {
    title: 'Authorization',
    description: (
      <>
        Specifying access rights/privileges to resources
      </>
    ),
    link: '/docs/category/authorization',
  },
  {
    title: 'Single Sign-On',
    description: (
      <>
        Login once and access services without re-entering authentication.
      </>
    ),
    link: '/docs/category/single-sign-on',
  },
  {
    title: 'End Point Policies',
    description: (
      <>
        End Point Policies
      </>
    ),
    link: '/docs/category/end-point-policies',
  },
];

function Feature({ title, description, link }) {
  return (
    <div className={clsx('col col--3')}
      style={{
        border: '1px solid gray',
        borderRadius: '0.25rem',
        padding: '4px',
        margin: '6px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="padding-horiz--md">
        <div className='row'>
          &nbsp;&nbsp;
          <Heading as="h3">
            <Link to={link}>{title}</Link>
          </Heading>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className='row' style={{ paddingBottom: '4px', marginBottom: '4px' }}>
          <div className='col'>
            <h2>Browse By Category</h2>
          </div>
        </div>
        <div className="row">
          {BrowseList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
