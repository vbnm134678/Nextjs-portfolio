import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextRequest } from 'next/server';
import React from 'react';

export async function GET() {
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
}