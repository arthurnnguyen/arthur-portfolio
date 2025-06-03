import { projects } from "../utils/projects"; // you’ll create this next


function Projects() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-3xl font-bold text-[#AFAFB0]">Projects</h2>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.id}
            className="rounded-2xl border border-white bg-[#242424] p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="mb-2 text-xl font-semibold text-white">{p.title}</h3>
            <p className="mb-4 text-[#AFAFB0]">{p.blurb}</p>

            <p className="mb-4 text-xs uppercase tracking-wide text-[#AFAFB0]">
              {p.stack.join(" • ")}
            </p>

            <div className="flex gap-4">
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline underline-offset-4"
              >
                GitHub
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-4"
                >
                  Live Demo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects