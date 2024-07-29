import React, { Component } from "react";
import { Client } from '@notionhq/client';
import ProjcetItem from "@/components/project_item";

export const metadata = {
  title: 'Projects',
}
const getPost = React.cache(async (): Promise<any> => {

  const notionDatabase = new Client({
    auth: process.env.NOTION_API_KEY
  })

  const db_id = process.env.NOTION_DATABASE_ID as string;

  const posts: object = await notionDatabase.databases.query({
    database_id: db_id,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending',
      },
    ],
  });
  return posts;
})

export default async function Projects() {

  const projects = await getPost();
  console.log(projects);
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