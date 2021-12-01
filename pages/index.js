import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/layouts/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import Footer from '../components/footer'

const Page = () => {
    return (
        <Container>
             <Box
        borderRadius="lg"
        mb={6}
        p={5}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
              Hello, I&apos;m a Cybersecurity intern and Coding student based in Brasil!
            </Box>

            <Box display={{md:'flex'}}>
                
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        David Lima
                        </Heading>
                    <p>White Hacker ( Photographer / Coding Student )</p>
                </Box>
         
            
         <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/david.jpg"
            alt="Profile image"
          />
        </Box>
               
         </Box>

         <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
       <Paragraph>
           David is a Cybersecurity student who has a passion for building digital services and analyse vulnerabilites. He's heading towards a Cyber Engineering graduation to further seek his passions. Check it out his projects at{' '}
        <NextLink href="/">
            <Link href="http://github.com/davivers" target="_blank">Github</Link> 
            
        </NextLink>
       </Paragraph>
        </Section>

        <Section
        delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>
                    2001
                </BioYear>
                Born in Fortaleza, Brasil.
            </BioSection>
            <BioSection>
                <BioYear>
                    2020
                </BioYear>
                Completed High School at Revere High School.
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            I ♥
            </Heading>
            <Paragraph>
                Music,{' '},
                <Link href="https://vsco.co/davivers/gallery" target="_blank">Photography</Link>
                , Coding, Playing Games
            </Paragraph>
            <Heading as="h3" variant="section-title">
                On the web
            </Heading>
            <List>
          <ListItem>
            <Link href="https://github.com/davivers" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @davivers
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://twitter.com/galadriel_lover" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @galadriel_lover
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/davi_serasa" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @davi_serasa
              </Button>
            </Link>
          </ListItem>
          
        </List>
        <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} David Lima. All Rights Reserved.
    </Box>
            </Section>
          
    
     </Container>
    
   
    )
}

export default Page
