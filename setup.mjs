import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const template = `---
title: 'Hello, World!'
publishedAt: '2023-01-01'
summary: 'This is your first blog post.'
---

Hello, World!`;

const homePage = `import * as React from 'react';
import dynamic from 'next/dynamic';

const Grid = dynamic(() => import('@mui/material/Grid'), { ssr: false });
const Avatar = dynamic(() => import('@mui/material/Avatar'), { ssr: false });

let myPhoto: string = 'images/avatar.jpg';
let MCUPhoto: string = 'images/microcontrollers.png';


export default function Page() {
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={9} alignItems="left">
        <h1 className="text-left font-medium text-left text-2xl mb-8 tracking-tighter">hey, I'm Jack Walton </h1>
      </Grid>
      <Grid item xs={3} alignItems="right">
        <Avatar src={myPhoto} alt="Jack Walton"  sx={{ width: 75, height: 75 }}/>
      </Grid>

      <Grid item xs={12}>
        <p className="prose prose-neutral dark:prose-invert">
        Welcome to my first full stack website! I am a Software Engineering major at Cal Poly, San Luis Obispo. I am interested in many aspects of computing. For example, I enjoy making full stack webapps like this one, creating embedded systems with microcontrollers, and solving complex technical problems.
        </p>
      </Grid>
    </Grid>
  );
}
`;

const workPage = `export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is where your work experience goes.
      </p>
    </section>
  );
}
`;

const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path);
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`))
    );
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};

(async () => {
  dotenv.config();

  if (process.env.IS_TEMPLATE === 'false') {
    // This means it's not the template, it's my legit site
    // I orderride the env variable for my site. This means that when
    // folks clone this repo for the first time, it will delete my personal content
    return;
  }

  const contentDir = path.join(process.cwd(), 'content');
  // path.join(process.cwd(), 'posts');
  const appDir = path.join(process.cwd(), 'app');
  const workDir = path.join(process.cwd(), 'app', 'work');

  await deleteFolderRecursive(contentDir);
  await fs.mkdir(contentDir);
  await fs.writeFile(path.join(contentDir, 'hello-world.mdx'), template);
  await fs.writeFile(path.join(appDir, 'page.tsx'), homePage);
  await fs.writeFile(path.join(workDir, 'page.tsx'), workPage);
})();
