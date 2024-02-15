import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUserCheck, faKey, faCubes, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';

const BrowseList = [
  {
    title: 'Getting Started',
    description: (<>Getting Started</>),
    link: '/docs-saas/docs/category/getting-started',
    icon: <FontAwesomeIcon icon={faRocket} />,
  },
  {
    title: 'Authentication',
    description: (<>A process of verifying the identity.</>),
    link: '/docs-saas/docs/category/authentication',
    icon: <FontAwesomeIcon icon={faUserCheck} />,
  },
  {
    title: 'Authorization',
    description: (<>Specifying access rights/privileges to resources</>),
    link: '/docs-saas/docs/category/authorization',
    icon:<FontAwesomeIcon icon={faKey} />,
  },
  {
    title: 'Single Sign-On',
    description: (<>Login once and access services without re-entering authentication.</>),
    link: '/docs-saas/docs/category/single-sign-on',
    icon:<FontAwesomeIcon icon={faCubes} />,
  },
  {
    title: 'End Point Policies',
    description: (<>End Point Policies</>),
    link: '/docs-saas/docs/category/end-point-policies',
    icon:<FontAwesomeIcon icon={faFilePowerpoint} />
  },
];

function Browse({ title, description, link, icon }) {
  return (
    <>
      <a href={link}
        className="block max-w-sm p-6 rounded-xl shadow border-solid border-[--ifm-color-emphasis-200]
         bg-[--ifm-card-background-color] hover:border-[--ifm-link-color] text-[--ifm-link-decoration] hover:text-[--ifm-link-decoration]"
        style={{ textDecoration: 'none' }}
      >
        <div className="flex items-center gap-4 mb-1">
          <span className={'m-0 p-0'}>{icon}</span>
          <h5 className="text-lg m-0 p-0">{title}</h5>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-400 mb-0">{description}</p>
      </a>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className='row m-2'>
          <h2 className='mb-4 text-xl'>Browse by Category</h2>
        </div>
        <div className="row m-2">
          <div className='gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {BrowseList.map((props, idx) => (
              <Browse key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
