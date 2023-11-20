import Button from "./Button";
import SelectedProject from "./SelectedProject";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-slate-900 text-slate-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-400">
        Your Project
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add New Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-slate-200 hover:bg-slate-800";
          if (project.id === selectedProjectId) {
            cssClass += " bg-slate-800 text-slate-200";
          } else {
            cssClass += " text-slate-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectedProject(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
