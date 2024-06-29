import React, { Component } from "react";
import { getPosts } from "./api/route";
import { projectsArray } from "@/types";

export const metadata = {
  title: 'Projects',
}


export default async function Projects() {

  const projects = await getPosts() as projectsArray;

  return (
    <div>
      <h1>총 프로젝트 : {projects.length}</h1>
    </div>
  );
}