import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const CatSpinner = () => (
  <Spinner
    size="x1"
    position="block"
    left="40%"
    top="30%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const CatContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-cat"
    m="auto"
    mt={['-20px', '-60px', '-10px']}
    mb={['-40px', '-140px', '-200px']}
    w={[380, 380, 740]}
    h={[280, 380, 640]}
    position="block"

  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <CatContainer>
     <CatSpinner/>
    </CatContainer>
  )
}

export default Loader