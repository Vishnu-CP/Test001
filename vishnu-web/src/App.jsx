import React, { useState } from 'react'

const experiences = [
  {
    company: 'Oracle',
    role: 'Senior Application Solution Developer',
    period: 'Apr 2021 — Present',
    number: '01',
    description: 'Building and modernizing enterprise applications for sales territory operations.',
    highlights: [
      'Developed Territory Change Request (TCR), an internal application for sales territory assignments and approvals that synchronizes approved changes with Oracle Fusion Cloud Sales Territories.',
      'Built Java and Spring Boot microservices, REST APIs, and Oracle JET interfaces across the full application stack.',
      'Introduced Redis caching for reference and dashboard data and Kafka event-driven workflows for the TCR lifecycle.',
      'Migrated TUT, TCR, R2P, and other applications from WebLogic Server to Oracle Kubernetes Engine using Docker.',
      'Led a 3-member team and owned technical design, reviews, mentoring, UAT coordination, deployments, and stakeholder demos.',
    ],
    tags: ['Java', 'Spring Boot', 'Oracle JET', 'Redis', 'Kafka', 'OKE'],
  },
  {
    company: 'Excelity Global (Dayforce)',
    role: 'Senior Software Engineer',
    period: 'Aug 2019 — Mar 2021',
    number: '02',
    description: 'Delivering HRIS features and dependable year-end processing for global teams.',
    highlights: [
      'Developed HRIS Global features using Java 8, Spring MVC, Hibernate, IBM DB2, and JSP.',
      'Implemented Japan and Korea year-end workflows for income and expense declarations and income-tax calculations.',
      'Created service APIs for employee, declaration, and payroll-processing data consumed by other HCM modules.',
      'Improved batch and asynchronous processing with validation, failure logs, and targeted reruns.',
      'Led and mentored a 2-member team while delivering enhancements.',
    ],
    tags: ['Java 8', 'Spring MVC', 'Hibernate', 'IBM DB2', 'JSP'],
  },
  {
    company: 'Capgemini',
    role: 'Associate Consultant',
    period: 'Nov 2016 — Aug 2019',
    number: '03',
    description: 'Developing a cloud-device testing platform and its application workflows.',
    highlights: [
      'Contributed to analysis, design, development, and implementation of the Test-on-Demand web application.',
      'Built REST APIs with Java, Spring Boot, and MySQL, along with tester dashboards and device-booking UI components.',
      'Developed asynchronous device-status updates and test notifications.',
      'Implemented APIs for device-booking, test-execution, and dashboard workflows.',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
  },
]

const projects = [
  {
    eyebrow: '01 / ORACLE',
    title: 'Territory Change Request',
    category: 'Enterprise workflow platform',
    description: 'An internal application to manage sales territory changes and assignments, with approved changes synchronized to Oracle Fusion Cloud Sales Territories.',
    contributions: ['Full-stack delivery', 'Redis-backed data access', 'Kafka lifecycle events'],
    visual: 'territory',
  },
  {
    eyebrow: '02 / ORACLE',
    title: 'Cloud migration to OKE',
    category: 'Application modernization',
    description: 'Moved TUT, TCR, R2P, and other application deployments from WebLogic Server to Oracle Kubernetes Engine with containerized Spring Boot services.',
    contributions: ['Docker', 'Kubernetes', 'OCI / OKE'],
    visual: 'cloud',
  },
  {
    eyebrow: '03 / DAYFORCE',
    title: 'HRIS year-end workflows',
    category: 'HCM product development',
    description: 'Implemented Japan and Korea year-end functionality, service APIs, and resilient batch processing for declarations and tax calculations.',
    contributions: ['Spring MVC', 'IBM DB2', 'Batch recovery'],
    visual: 'hris',
  },
  {
    eyebrow: '04 / CAPGEMINI',
    title: 'Test-on-Demand',
    category: 'Cloud-device testing',
    description: 'Built APIs and interfaces for tester dashboards, device booking, test execution, and asynchronous device-status notifications.',
    contributions: ['REST APIs', 'Spring Boot', 'MySQL'],
    visual: 'testing',
  },
]

const skillGroups = [
  { title: 'Backend', items: ['Java 8 / 17', 'Spring Boot', 'Spring MVC', 'Hibernate / JPA', 'REST APIs', 'Microservices', 'PL/SQL', 'JUnit / Mockito'] },
  { title: 'Frontend', items: ['JavaScript', 'React', 'Oracle JET', 'HTML / CSS', 'JSP'] },
  { title: 'Data & messaging', items: ['Oracle Database', 'Oracle Autonomous Database', 'IBM DB2', 'MySQL', 'Redis', 'Kafka'] },
  { title: 'Cloud & delivery', items: ['Oracle Cloud Infrastructure', 'Oracle Kubernetes Engine', 'Docker', 'Kubernetes', 'Jenkins', 'Maven', 'Git', 'WebLogic Server'] },
  { title: 'AI & collaboration', items: ['Spring AI', 'LangChain', 'RAG', 'OpenAI API', 'Vector Databases', 'Prompt Engineering', 'Agile / Scrum', 'Jira / Confluence'] },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [activeExperience, setActiveExperience] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const current = experiences[activeExperience]

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Vishnu Das CP, back to top"><span className="brand-mark">VD<span>.</span></span><span className="brand-name">VISHNU DAS CP</span></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
          <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> SENIOR SOFTWARE ENGINEER · BENGALURU, INDIA</div>
              <h1 id="hero-title">Engineering <em>reliable</em><br />systems at scale<span className="hero-period">.</span></h1>
              <p className="hero-lede">I’m Vishnu Das CP — a software engineer with 9.9 years of experience building enterprise applications, modernizing platforms, and guiding teams from design through production.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <Arrow diagonal /></a>
                <a className="button button-secondary" href="/Vishnu_Das_CP_Resume_5.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-social"><span>FIND ME ON</span><a href="https://www.linkedin.com/in/vishnu-das-c-p-766634165/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="mailto:vishnu.7210@gmail.com">Email <Arrow diagonal /></a></div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orb orb-one" /><div className="orb orb-two" />
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="art-card art-card-top"><span className="tiny-label">CURRENT FOCUS</span><strong>Cloud-native<br />enterprise apps</strong><span className="art-icon">↗</span></div>
              <div className="art-monogram">VD<span>.</span></div>
              <div className="art-card art-card-bottom"><span className="tiny-label">CORE STACK</span><strong>Java <span>·</span> Spring Boot <span>·</span> OKE</strong></div>
              <span className="art-coordinate">12.9716° N / 77.5946° E</span>
            </div>
          </div>
          <div className="container hero-footer"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /><span>01 / 05</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div><p className="section-kicker"><span>01</span> / ABOUT</p><h2>From complex needs<br />to <em>clear solutions.</em></h2></div>
            <div className="about-body"><p>I work across the backend, frontend, and delivery pipeline to turn business requirements into dependable software. My experience spans microservices and REST APIs, Oracle JET interfaces, data workflows, and deployments on Oracle Kubernetes Engine.</p><p>At Oracle, I lead a small engineering team while contributing hands-on to architecture, implementation, code reviews, releases, and stakeholder demonstrations.</p><div className="about-facts"><div><strong>9.9</strong><span>Years of experience</span></div><div><strong>3</strong><span>Companies</span></div><div><strong>Full stack</strong><span>Backend to UI</span></div></div></div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container"><div className="section-heading"><div><p className="section-kicker"><span>02</span> / SELECTED WORK</p><h2>Work that tells<br /><em>the story.</em></h2></div><p>A closer look at the platforms and workflows I have helped build across enterprise sales, HCM, and device testing.</p></div>
            <div className="project-grid">{projects.map((project) => <article className={`project-card project-${project.visual}`} key={project.title}><div className="project-top"><span>{project.eyebrow}</span><span className="project-symbol" aria-hidden="true">↗</span></div><div className="project-graphic" aria-hidden="true"><div className="graphic-grid" /><div className="graphic-main"><span>{project.visual === 'territory' ? 'TCR' : project.visual === 'cloud' ? 'OKE' : project.visual === 'hris' ? 'HRIS' : 'TOD'}</span><small>{project.category}</small></div><div className="graphic-ring" /></div><div className="project-content"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.contributions.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container"><div className="section-heading"><div><p className="section-kicker"><span>03</span> / EXPERIENCE</p><h2>Where I've<br /><em>made an impact.</em></h2></div><p>Nearly a decade of building, improving, and delivering software with teams across enterprise environments.</p></div>
            <div className="experience-layout"><div className="experience-tabs" role="tablist" aria-label="Employers">{experiences.map((experience, index) => <button type="button" role="tab" id={`experience-tab-${index}`} aria-controls="experience-panel" aria-selected={activeExperience === index} className={activeExperience === index ? 'experience-tab active' : 'experience-tab'} key={experience.company} onClick={() => setActiveExperience(index)}><span className="tab-number">{experience.number}</span><span className="tab-text"><strong>{experience.company}</strong><small>{experience.period}</small></span><Arrow diagonal /></button>)}</div><div className="experience-panel" id="experience-panel" role="tabpanel" aria-labelledby={`experience-tab-${activeExperience}`} key={current.company}><span className="panel-period">{current.period} · Bengaluru</span><h3>{current.role}</h3><p className="panel-description">{current.description}</p><ul>{current.highlights.map((item) => <li key={item}>{item}</li>)}</ul><div className="panel-tags">{current.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>
          </div>
        </section>

        <section className="section skills-section" id="skills"><div className="container"><div className="section-heading"><div><p className="section-kicker"><span>04</span> / EXPERTISE</p><h2>The tools behind<br /><em>the work.</em></h2></div><p>A practical toolkit for designing, building, and delivering enterprise applications.</p></div><div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><div className="skill-heading"><span>0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

        <section className="section credentials-section"><div className="container credentials-grid"><div><p className="section-kicker"><span>05</span> / FOUNDATIONS</p><h2>Always<br /><em>building on.</em></h2></div><div className="credentials-list"><div><span className="credential-type">EDUCATION</span><div><h3>B.Tech, Computer Science & Engineering</h3><p>School of Engineering, Cochin University of Science and Technology (CUSAT)</p><small>Aug 2012 — Apr 2016 · Cochin, Kerala</small></div></div><div><span className="credential-type">CERTIFICATIONS</span><div><h3>Certified SAFe 6 Practitioner</h3><h3>Oracle Cloud Infrastructure Foundations Associate</h3><small>2025</small></div></div></div></div></section>

        <section className="contact-section" id="contact"><div className="container contact-grid"><div><p className="section-kicker"><span>LET'S TALK</span> / CONTACT</p><h2>Have a challenge<br />worth <em>solving?</em></h2><p>I'm open to conversations about engineering roles, enterprise platforms, and cloud-native delivery.</p><a className="button button-light" href="mailto:vishnu.7210@gmail.com?subject=Let%27s%20connect">Start a conversation <Arrow diagonal /></a></div><div className="contact-details"><div><span>EMAIL</span><a href="mailto:vishnu.7210@gmail.com">vishnu.7210@gmail.com <Arrow diagonal /></a></div><div><span>PHONE</span><a href="tel:+919606154915">+91 96061 54915 <Arrow diagonal /></a></div><div><span>LINKEDIN</span><a href="https://www.linkedin.com/in/vishnu-das-c-p-766634165/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow diagonal /></a></div><div><span>LOCATION</span><strong>Bengaluru, India</strong></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a href="#top" className="footer-brand">VD<span>.</span></a><span>© {new Date().getFullYear()} Vishnu Das CP</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  )
}

export default App
