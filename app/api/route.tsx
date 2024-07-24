import { Client } from '@notionhq/client';
import React from 'react';

const getPost = React.cache(async (): Promise<any> => {
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

  return posts;
})

export { getPost as GET };

// from: return { message: 'Failed to create' };

// To: return NextResponse.json({ error: 'Failed to create' }, { status: 400 });