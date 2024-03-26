'use client'
// import  Image  from 'next/image';
import { Image } from '@chakra-ui/react'
import { Grid, GridItem, VStack, Container } from '@chakra-ui/react'

let myPhoto: string = 'images/avatar.jpg';
let MCUPhoto: string = '/images/microcontrollers.png';
let calPolyPhoto: string = '/images/calPoly.png';
let profPhoto: string = '/images/romeClassroom.jpg';


// function Body() {
//   return (
//       <p className="prose prose-neutral dark:prose-invert">
//         This is my first full stack website!
//       </p>
// )
//   ;
// }

// function Headliner() {
//   return <h1 className="font-medium text-2xl mb-8 tracking-tighter">Welcome! I'm Jack Walton</h1>;
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

function App() {
  return (
    <Grid
      templateAreas={`"profile main"
                      "header header"
                      "photo photo"
                      "content content"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='10'
      color='blackAlpha.700'
      fontWeight='bold'
      alignItems="center"
    >
      <GridItem pl='2' area={'profile'}>
        <Image src={myPhoto} alt="Jack Walton" width={100} height={100} className="rounded-full" />
      </GridItem>

      <GridItem pl='1' area={'main'} fontSize={24} alignItems="center">
        hey, I'm Jack
      </GridItem>

      <GridItem pl='1' area={'header'} fontWeight={400}>
        <br></br>
        <VStack>
          <Container maxW='md' className="prose prose-neutral dark:prose-invert">
            Welcome to my first full stack website! I am a Software Engineering major at Cal Poly, San Luis Obispo. I am interested in many aspects of computing. For example, I enjoy making full stack webapps like this one, creating embedded systems with microcontrollers, and solving complex technical problems.
          </Container>
          <Container maxW='md'  color='white'>
            <Grid templateColumns='repeat(3, 1fr)' gap={20} alignItems="center" >
              <GridItem>
                <Image boxSize='auto' className="rounded-xl" src={MCUPhoto} alt="a microcontrollers project" />
              </GridItem> 
              <GridItem>
                <Image boxSize='auto'  className="rounded-xl" src={profPhoto} alt="professor of study abroad program and I" />
              </GridItem> 
              <GridItem>
                <Image  boxSize='auto'  className="rounded-xl" src={calPolyPhoto} alt="Cal Poly, SLO" />
              </GridItem>
            </Grid>
          </Container>
          <Container maxW='md' className="prose prose-neutral dark:prose-invert">
              I pride myself in my ability to learn new technologies, recognize patterns, and problem solve in any context. I also can explain these complexities to a diverse group of individuals. These are the qualities that make me a great software engineer.
          </Container>
        </VStack>
      </GridItem>
 
    </Grid>
  );
}
export default function Page() {
  return (
    // <ChakraProvider>
      <App></App>
    // </ChakraProvider>
  );
}

/* <Flex id="HomePage Content" direction="column">

<Flex direction={{ base: 'column', md: 'row' }} alignItems="left" justifyContent="left">
  <Flex mr={{ base: 0, md: 8 }} mb={{ base: 4, md: 0 }}>
    <Image src={MyPhoto} alt="Jack Walton" width={200} height={200} className="rounded-full" />
  </Flex>
  <Flex alignItems="center" justifyContent="center" textAlign={{ base: 'center', md: 'left' }}>
    <Text fontSize="2xl" fontWeight="medium" mb={2} letterSpacing="tighter">Welcome! I'm Jack Walton</Text>
  </Flex>
</Flex>

<Flex direction={{ base: 'column', md: 'row' }} alignItems="left" justifyContent="left">
  <Flex className="prose prose-neutral dark:prose-invert md:text-left">
    <Text>This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website! This is my first full stack website!</Text>
  </Flex>
</Flex>

</Flex> */

// export default function Page() {
//   return (
//     <section>
//       <h1 className="font-medium text-2xl mb-8 tracking-tighter">Welcome! I'm Jack Walton</h1>
//       <p className="prose prose-neutral dark:prose-invert">
//         This is my first full stack website!
//       </p>
//     </section>
//   );
// }