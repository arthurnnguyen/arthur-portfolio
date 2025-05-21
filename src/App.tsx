// Project: personal-website
// File Created: 2023-10-01
// Author: Arthur Nguyen (
//  
import './App.css'

function App() {
  return (
    <main className="flex flex-col items-center gap-6 py-20">
      <h1 className="text-4xl font-bold">Arthur Nguyen</h1>
      <p className="text-xl max-w-md text-center">
        Computer-science senior &amp; Network / Cloud Ops intern.
        I build efficient back-end services and clean front-end experiences.
      </p>

      <nav className="flex gap-4 text-blue-600">
        <a href="/projects">Projects</a>
        <a href="/resume.pdf" target="_blank">Résumé</a>
        <a href="mailto:arthur@example.com">Contact</a>
      </nav>
    </main>
  
  );
}

export default App
