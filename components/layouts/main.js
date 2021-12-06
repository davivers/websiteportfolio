import Head from 'next/head'
import Navbar from '/components/navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
               
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>David Lima - Portfolio</title>
                <link rel="icon" type="image/png" sizes="64x64" href="/public/images/catfav.png" />

            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
             </Container>
        </Box>

    )
}

export default Main
