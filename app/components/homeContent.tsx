"use client";

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


let myPhoto: string = 'images/avatar.jpg';



export default function HomePageContent() {
    return (
      
<Grid container spacing={2} justifyContent="center">

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
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
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
              <Typography color="inherit" gutterBottom variant="h6" >
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
        <Grid item xs={10} sm={6} md={5} alignItems="center" justifyContent="space-around">
          <ActionCard 
            url="https://github.com/JackWalton1" 
            avatarSrc="https://avatars.githubusercontent.com/u/81585486?v=4"
            text="GitHub"
          />
        </Grid>
  
        <Grid item xs={10} sm={6} md={5} alignItems="center" justifyContent="space-around">
          <ActionCard 
            url="https://www.linkedin.com/in/thejackwalton/"      
            avatarSrc= "https://media.licdn.com/dms/image/D5635AQGnXJOIHCRG7g/profile-framedphoto-shrink_100_100/0/1709099403881?e=1713456000&v=beta&t=Jbu91pozSgzFPKfWJi9M_wzWNositmZBlqOirmL85zw" 
            text="LinkedIn"
          />
        </Grid>
      </Grid>
    );
  }