import React from "react";
import Title from "./project.title";
import { Badge } from "@/components/badge/badge.component";
import { numericalToString } from "@/tools/core/month";
import type { Projects } from "@/types";
import type { FC } from "react";

interface Props {
  project: Projects;
  projects: Projects[] | null;
  setProjects: React.Dispatch<React.SetStateAction<Projects[] | null>>;
  onClick: () => void;
}

const Project: FC<Props> = ({ project, projects, setProjects, onClick }) => (
  <div
    className="card mx-4 w-96 cursor-pointer border border-primary bg-primary-dark shadow-xl"
    onClick={onClick}
  >
    <div className="card-body">
      <h2 className="card-title">
        <Title
          project={project}
          projects={projects}
          setProjects={setProjects}
        />
      </h2>
      <hr className="pb-1 text-primary" />
      <div className="mx-auto flex w-[88%] items-center justify-center space-x-8">
        <Badge category={project.focus} />
        <span className="badge badge-md mx-auto flex w-[100%] border border-primary bg-[#fff] font-bold text-success">
          <span className="badge-success badge badge-xs mr-2"></span>
          active
        </span>
      </div>
      <div className="card-actions justify-end">
        <div className="mx-auto flex w-[95%] space-x-4">
          <span className="w-[50%] text-left text-xs">Timeframe :</span>{" "}
          <span className="flex w-[50%] items-center justify-end space-x-4 font-bold">
            <span className="w-[100%] text-xs">
              {`${project.starts_at.split("-")[2]!} ${
                project.starts_at.split("-")[1]! &&
                numericalToString(project.starts_at)!
              }`}
            </span>
            <span className="flex w-[100%] text-xs">
              {`${project.ends_at.split("-")[2]!}  ${
                project.ends_at.split("-")[1]! &&
                numericalToString(project.ends_at)!
              }`}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
