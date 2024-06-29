import { Client } from '@notionhq/client';
import React from 'react';

export const getPosts = React.cache(async () => {
  const notionDatabase = new Client({
    auth: process.env.NOTION_API_KEY
  })

  const db_id = process.env.NOTION_DATABASE_ID;

  if (db_id === undefined) {
    const errorMessage = {
      message: 'Check Database ID'
    }
    return errorMessage;
  }

  const posts = await notionDatabase.databases.query({
    database_id: db_id,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending',
      },
    ],
  });

  const postID = posts.results.map((post) => (
    post.properties.Name.title[0].plain_text
  ))
  console.log(postID);
  return postID;
})