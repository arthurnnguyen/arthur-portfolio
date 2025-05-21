const projects = [
    {
      name: "Shelter Occupancy Predictor",
      link: "https://github.com/arthurnguyen/shelter-prediction",
      stack: ["Python", "LightGBM", "Azure ML"],
      blurb: "Forecasts nightly bed demand using weather and eviction data."
    },
    /* more entries */
  ];
  
  export default function Projects() {
    return (
      <section className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <ul className="grid gap-6">
          {projects.map(p => (
            <li key={p.name} className="border p-4 rounded-lg shadow">
              <a href={p.link} className="text-2xl text-blue-600">
                {p.name}
              </a>
              <p className="mt-2">{p.blurb}</p>
              <p className="text-sm text-gray-500">{p.stack.join(" • ")}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  