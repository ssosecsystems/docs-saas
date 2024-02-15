import styles from './styles.module.css';

const BrowseList = [
  {
    title: 'Getting Started',
    description: (
      <>
        Getting Started
      </>
    ),
    link: '/docs-saas/docs/category/getting-started',
  },
  {
    title: 'Authentication',
    description: (
      <>
        A process of verifying the identity.
      </>
    ),
    link: '/docs-saas/docs/category/authentication',
  },
  {
    title: 'Authorization',
    description: (
      <>
        Specifying access rights/privileges to resources
      </>
    ),
    link: '/docs-saas/docs/category/authorization',
  },
  {
    title: 'Single Sign-On',
    description: (
      <>
        Login once and access services without re-entering authentication.
      </>
    ),
    link: '/docs-saas/docs/category/single-sign-on',
  },
  {
    title: 'End Point Policies',
    description: (
      <>
        End Point Policies
      </>
    ),
    link: '/docs-saas/docs/category/end-point-policies',
  },
];

function Browse({ title, description, link }) {
  return (
    <a className="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module" href={link}>
      <h2 class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module" title={title}>
        {title}
      </h2>
      <p class="cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module" title={title}>
        {description}
      </p>
    </a>
    /*<div>
      <div>
        <div className='flex h-full flex-col gap-2 p-4 rounded border-solid border-[--ifm-color-emphasis-300]'>
          <div className='flex items-center gap-4'>
            </span>
            <div className='text-xl color-[--ifm-heading-color]'>
              {title}
            </div>
          </div>
          <div className='flex h-full flex-col justify-between gap-4 text-sm'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>*/
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
