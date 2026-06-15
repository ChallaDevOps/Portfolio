const projects = [
  "AKS Production Platform",
  "Terraform Multi Environment Infra",
  "GitHub Actions CI/CD",
  "Prometheus Grafana Monitoring",
  "Azure Databricks Automation",
  "Docker Multi Stage Builds"
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">

      <h2 className="text-4xl text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {projects.map(project => (
          <div
            key={project}
            className="p-6 bg-slate-900 rounded-xl"
          >
            <h3 className="text-xl">
              {project}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}
