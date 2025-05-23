export default function Hero() {
    return (
      <section className="flex flex-col items-center gap-6 py-20">
        <h1 className="text-4xl font-bold">Arthur Nguyen</h1>
  
        <p className="text-xl max-w-md text-center">
          Computer-science senior&nbsp;• Network &amp; Cloud Ops intern.<br />
          I build efficient back-end services and clean front-end experiences.
        </p>
  
        <nav className="flex gap-4 text-blue-600 underline">
          <a href="/projects">Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener">
            Résumé
          </a>
          <a href="mailto:arthurnnguyen@gmail.com">Contact</a>
        </nav>
      </section>
    );
  }
  