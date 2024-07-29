import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';
import React from 'react';
import { Middleware } from 'next/dist/lib/load-custom-routes';
import { queryDatabase } from '@notionhq/client/build/src/api-endpoints';



// const db_id = process.env.NOTION_DATABASE_ID;
// if (db_id === undefined) {
//   const errorMessage: { message: string } = {
//     message: 'Check Database ID'
//   };

// }
// const posts = await notionDatabase.databases.query({
//   database_id: db_id,
//   sorts: [
//     {
//       property: 'Name',
//       direction: 'ascending',
//     },
//   ],
// });

// const data = {
//   message: 'notion data 가져오기',
//   data: posts
// }
// let response = NextResponse.next();
// return response.cookies.getAll(posts)
//   // return posts;
// })

// export { getPost as GET };