import { DocsThemeConfig } from 'nextra-theme-docs'
import { ReactNode } from 'react'

const config: DocsThemeConfig = {
  logo: <span>AmokLeaf Docs</span>,
  footer: {
    text: '© 2025 AmokLeaf Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – AmokLeaf Docs'
    }
  },
  project: {
    link: 'https://github.com/MEFRREEX/amokleaf-docs',
  },
  docsRepositoryBase: 'https://github.com/MEFRREEX/amokleaf-docs',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AmokLeaf Documentation" />
      <meta property="og:description" content="Official documentation for AmokLeaf" />
    </>
  ),
  navigation: {
    prev: true,
    next: true
  },
  feedback: {
    content: (
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: '0.5rem' }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
        Нашли ошибку? Сообщите нам
      </span>
    ),
    labels: 'feedback'
  },
  editLink: {
    text: 'Редактировать страницу',
    component: ({ children, className, filePath }: { children: ReactNode; className?: string; filePath?: string }) => (
      <a 
        className={className} 
        href={`https://github.com/MEFRREEX/amokleaf-docs/edit/main/${filePath}`}
        style={{ display: 'inline-flex', alignItems: 'center' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: '0.5rem' }}
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
        {children}
      </a>
    )
  }
}

export default config 