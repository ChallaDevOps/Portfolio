const skills = [
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
  "Jenkins",
  "Linux",
  "Databricks",
  "Prometheus",
  "Grafana"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">

      <h2 className="text-4xl text-center">
        Skills
      </h2>

      <div className="grid grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">

        {skills.map(skill => (
          <div
            key={skill}
            className="p-4 rounded-lg bg-slate-800 text-center"
          >
            {skill}
          </div>
        ))}

      </div>
    </section>
  );
}
