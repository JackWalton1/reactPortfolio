import * as React from 'react';
import dynamic from 'next/dynamic';
import { GeistSans } from 'geist/font/sans';
import HomePageContent from './components/homeContent';

// import { styled } from '@mui/material/styles';

const Grid = dynamic(() => import('@mui/material/Grid'), { ssr: false });
const Avatar = dynamic(() => import('@mui/material/Avatar'), { ssr: false });
const ImageList = dynamic(() => import('@mui/material/ImageList'), { ssr: false });
const ImageListItem = dynamic(() => import('@mui/material/ImageListItem'), { ssr: false });
const Card = dynamic(() => import('@mui/material/Card'), { ssr: false });
const CardContent = dynamic(() => import('@mui/material/CardContent'), { ssr: false });
const CardActionArea = dynamic(() => import('@mui/material/CardActionArea'), { ssr: false });
const Typography = dynamic(() => import('@mui/material/Typography'), { ssr: false });
const Box = dynamic(() => import('@mui/material/Box'), { ssr: false });

export default function Page() {
  return (
    <HomePageContent></HomePageContent>
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