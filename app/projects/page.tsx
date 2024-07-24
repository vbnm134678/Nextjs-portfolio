import React, { Component } from "react";
import { GET } from "./api/route";
import ProjcetItem from "@/components/project_item";

export const metadata = {
  title: 'Projects',
}


export default async function Projects() {

  const projects = await GET();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
      <h1 className="text-4xl font-bold sm:text-5xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 m-6 sm:w-full">
        {projects.results.map((aProject: any) => (
          <ProjcetItem key={aProject.id} data={aProject}></ProjcetItem>
        ))}
      </section>
    </div>
  );
}