import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
    return (
        <Container mt={250}>
           
            <Box mt={20}display={{md:'flex'}}>
                
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        David Apolinario
                        </Heading>
                    <p> CyberSecurity Student / FullStack Developer</p>
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
            maxWidth="130px"
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
           David is a FullStack Developer/ CyberSecurity Student who has a passion for building Web services and Offensive Security. He's now enrolled in an Information Systems degree looking for his first experience in the I.T Market. Check out his projects at:<NextLink href="/">
            <Link href="http://github.com/davivers" target="_blank" passHref>Github</Link> 
            
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
            <BioSection>
                <BioYear>
                    2022
                </BioYear>
                Enrolled in Information Systems Bachelor's Degree at Universidade Metropolitana de Fortaleza
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            I ♥
            </Heading>
            <Paragraph>
                Music,
                <Link href="https://vsco.co/davivers/gallery" target="_blank" passHref>Photography</Link>
                ,Coding,Playing Games
            </Paragraph>
            <Heading as="h3" variant="section-title">
                On the web
            </Heading>
            <List>
          <ListItem>
            <Link href="https://github.com/davivers" target="_blank" passHref>
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
            <Link href="https://instagram.com/meg_1d0" target="_blank" passHref>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @meg_1d0
              </Button>
            </Link>
          </ListItem><ListItem>
            <Link href="https://www.linkedin.com/in/david-a-42a652212/" target="_blank" passHref>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @david-a-42a652212
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
