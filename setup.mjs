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
import { GeistSans } from 'geist/font/sans';

const Grid = dynamic(() => import('@mui/material/Grid'), { ssr: false });
const Avatar = dynamic(() => import('@mui/material/Avatar'), { ssr: false });
const ImageList = dynamic(() => import('@mui/material/ImageList'), { ssr: false });
const ImageListItem = dynamic(() => import('@mui/material/ImageListItem'), { ssr: false });
const Card = dynamic(() => import('@mui/material/Card'), { ssr: false });
const CardContent = dynamic(() => import('@mui/material/CardContent'), { ssr: false });
const CardActionArea = dynamic(() => import('@mui/material/CardActionArea'), { ssr: false });
const Typography = dynamic(() => import('@mui/material/Typography'), { ssr: false });
const Box = dynamic(() => import('@mui/material/Box'), { ssr: false });

let myPhoto: string = 'images/avatar.jpg';

export default function Page() {
  return (
    <Grid container spacing={2}>

      <Grid item xs={9} alignItems="left">
        <h1 className="text-left font-medium text-2xl mb-8 tracking-tighter">hey, I'm Jack Walton </h1>
      </Grid>

      <Grid item xs={3} alignItems="right">
        <Avatar src={myPhoto} alt="Jack Walton"  sx={{ width: 75, height: 75 }}/>
      </Grid>

      <Grid item xs={12} >
        <p className="prose prose-neutral dark:prose-invert">
        Welcome to my first full stack website! I am a Software Engineering major at Cal Poly, San Luis Obispo. I am interested in many aspects of computing. For example, I enjoy making full stack webapps like this one, creating embedded systems with microcontrollers, and solving complex technical problems in general.
        </p>
      </Grid>

      <Grid item xs={12} >
        <DisplayImages/>
      </Grid>

      <Grid item xs={12} >
        <p className="prose prose-neutral dark:prose-invert">
        I pride myself in my ability to learn new technologies, recognize patterns, and problem solve in any context. I also can explain these complexities to a diverse group of individuals. These are the qualities that make me a great software engineer.
        </p>
      </Grid>

      <Grid item xs={12} justifyContent="center">
        <DisplayActionCards/>
      </Grid>

    </Grid>
  );
}


const itemData = [
  {
    img: 'images/microcontrollers.png',
    title: 'RFID Copier',
  },
  {
    img: 'images/romeClassroom.jpg',
    title: 'Study abroad in Rome',
  },
  {
    img: 'images/calPoly.png',
    title: 'campus',
  },
];

function DisplayImages(){
  return(
  <ImageList variant="masonry" cols={3} gap={15}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          srcSet={\`\${item.img}?w=248&fit=crop&auto=format&dpr=2 2x\`}
          src={\`\${item.img}?w=248&fit=crop&auto=format\`}
          alt={item.title}
          loading="lazy"
          style={{ borderRadius: '20px' }}
        />
      </ImageListItem>
    ))}
  </ImageList>
);
}

const ActionCard = ({ url, avatarSrc, text }) => {
  return (
    <a href={url} >

    <Card sx={{ maxHeight: 75, maxWidth:375 }}  style={{ borderRadius: '15px' }} variant="outlined" >
      <CardActionArea >
        <CardContent className='text-black bg-white dark:text-white dark:bg-[#202020]'>
          <Box
          my={-1.5}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          p={2}
          gap={4}
          component="section"
          >
            <Avatar src={avatarSrc} aria-label="GitHub">
              JW
            </Avatar>    
            <Typography className={GeistSans.variable} color="inherit" gutterBottom variant="h6" >
             {text}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}

function DisplayActionCards(){
  return(
    <Grid container spacing={2} alignItems="center" justifyContent="space-around">
      <Grid item xs={6.1} md={5} alignItems="center" justifyContent="space-around">
        <ActionCard 
          url="https://github.com/JackWalton1" 
          avatarSrc="https://avatars.githubusercontent.com/u/81585486?v=4"
          text="GitHub"
        />
      </Grid>

      <Grid item xs={6.1} md={5} alignItems="center" justifyContent="space-around">
        <ActionCard 
          url="https://www.linkedin.com/in/thejackwalton/"      
          avatarSrc= "https://media.licdn.com/dms/image/D5635AQGnXJOIHCRG7g/profile-framedphoto-shrink_800_800/0/1709099403881?e=1712714400&v=beta&t=P-o-5itBT9NeKI4lgpOkRcXh7KGxH9fsHfgl1D9X1MM" 
          text="LinkedIn"
        />
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
