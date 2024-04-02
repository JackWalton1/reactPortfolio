import * as React from 'react';
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
