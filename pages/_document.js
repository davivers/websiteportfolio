import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript} from 'next/document'
import theme from '../libs/theme'

export default class Document extends NextDocument {
    render () {
        return (
        <Html lang="en">
            <Head> <link rel="icon" type="image/png" size="64x64" href="/public/images/catfav.png" /></Head>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <Main>
            </Main>
            <NextScript>
            </NextScript>
            </body>
        </Html>
        )
    
    }
}
