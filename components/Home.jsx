import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/12.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/p2.jpg'
import { transform } from 'framer-motion';

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    TextTransform: 'uppercase',
    p:'4',
    size:'4xl',
}

const Home = () => {
  return <Box>
    <MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading 
        textTransform={"uppercase"} 
        py="2"
        w={"fit-content"}  
        borderBottom={"2px solid"}
        m={"auto"}
        >
            Services
        </Heading>
        <Stack
        h="full"
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}
        >
            <img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
            <text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
            >
            Welcome to the About Photography Blog, 
            where I share my thoughts and essays about photography. 
            Whether you're a beginner or a seasoned veteran, 
            there's something on this website that will pique your interest. 
            The site is divided into several sections. 
            This section covers the basics for anyone just starting or looking to discover different genres of photography. 
            You can find various photographers in the masters section, 
            as well as interesting stories or facts about pictures you may not know.
            You can also become a part of this website by publishing your photo essay or introducing your photography books. 
            For more information please read the following article.
            In addition to this website, I also produce video content (published on YouTube and other platforms) as well as audio content (in the form of a podcast). 
            If that's something you're interested in, I look forward to seeing you around.Even though this website is not meant to be gear-oriented, and you've probably heard more than once that "gear doesn't matter," you still need "something" to take pictures with. That's why there will be gear articles every now and then in the gear section.
            </text>
        </Stack>
    </Container>
  </Box>;
};

const MyCarousel = ()=>(
    <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false}
    showThumbs={false} 
    showArrows={false}
    >
    <Box w="ful" h={'100vh'}>
            <img src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
    </Box>
    <Box w="ful" h={'100vh'}>
            <img src={img2} />
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Future is Photography
            </Heading>
    </Box>
    <Box w="ful" h={'100vh'}>
            <img src={img3} />
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Saving Memories
            </Heading>
    </Box>
    <Box w="ful" h={'100vh'}>
            <img src={img4} />
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>
                Night Life is cool
            </Heading>
    </Box>
    </Carousel>
)

export default Home;

