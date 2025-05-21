/* src/components/Layout.tsx */
export default function Layout({ children }: React.PropsWithChildren) {
    return (
      <div className="min-h-screen flex flex-col font-sans text-slate-800">
        <header className="py-6 shadow-md bg-white">
          <div className="container mx-auto flex justify-between">
            <a href="/" className="text-2xl font-bold tracking-tight">Arthur Nguyen</a>
            <nav className="flex gap-6 text-blue-600">
              <a href="/projects">Projects</a>
              <a href="/resume.pdf" target="_blank" rel="noopener">Résumé</a>
              <a href="mailto:arthur@example.com">Contact</a>
            </nav>
          </div>
        </header>
  
        <main className="flex-1 container mx-auto px-4 py-12">{children}</main>
  
        <footer className="py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Arthur Nguyen
        </footer>
      </div>
    );
  }
  