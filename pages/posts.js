import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/section'
import { GridItem } from '../components/grid-item'
import thumbone from '../public/images/thumbone.png'
import thumbpaul from '../public/images/thumbpaul.png'



const Posts = () => (
  <Layout title="Posts" >
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        
        Popular Posts
      
     </Heading>
 <Section delay={0.1}>
       <SimpleGrid columns={[1,2,2]} gap={6}>
            <GridItem
            title="Minha experiência de aprendizado na plataforma DIO"
            thumbnail={thumbone}
            href="/">
            </GridItem>
            <GridItem
            title="Sheltered Instructions"
            thumbnail={thumbpaul}
            href="https://rhspatriotvoice.org/1975/opinion/sheltered-instruction/"
            target="_blank">

            </GridItem>
         </SimpleGrid>
     </Section>
    </Container>
  </Layout>
)

export default Posts
