import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbpaul from '../public/images/thumbpaul.png'
import thumbconsult from '../public/images/thumbconsult.png'
import thumbTCP from '../public/images/thumbTCP.png'
import thumbUser from '../public/images/thumbUser.png'
import thumbServer from '../public/images/thumbServer.png'
import thumbLogin from '../public/images/thumbLogin.png'
import thumbDoom from '../public/images/thumbDoom.png'



const Posts = () => (
  <Layout title="Posts" >
    <Container>
      <Heading as="h3" fontSize={25} mb={5} mt={5}>
        
        Projects
      
     </Heading>
 <Section delay={0.1}>
       <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem
            title="Sheltered Instructions"
            thumbnail={thumbpaul}
            href="https://rhspatriotvoice.org/1975/opinion/sheltered-instruction/"
            target="_blank">

            </GridItem>
            <GridItem
            title="Consultar CEP"
            thumbnail={thumbconsult}
            href="https://github.com/davivers/Consultar-Cep"
            target="_blank">

            </GridItem>
         </SimpleGrid>
         <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem
            title="Multithread TCP Scanner"
            thumbnail={thumbTCP}
            href="https://github.com/davivers/Python-Multithread-Tcp-Scanner"
            target="_blank">

            </GridItem>
            <GridItem
            title="DOOM Fire in Js"
            thumbnail={thumbDoom}
            href="https://github.com/davivers/DOOM-Fire-in-JS"
            target="_blank">

            </GridItem>
         </SimpleGrid>
         <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem
            title="User Management System"
            thumbnail={thumbUser}
            href="https://github.com/davivers/User-Management-System"
            target="_blank">

            </GridItem>
            <GridItem
            title="Login Form with ChakraUI"
            thumbnail={thumbLogin}
            href="https://github.com/davivers/Login-Form-with-ChakraUI"
            target="_blank">
            </GridItem>
            </GridItem>
            <GridItem
            title="Server Side Form Validation"
            thumbnail={thumbServer}
            href="https://github.com/davivers/Server-side-Form-Validation"
            target="_blank">
            </GridItem>

            </GridItem>
         </SimpleGrid>
     </Section>
    </Container>
  </Layout>
)

export default Posts
