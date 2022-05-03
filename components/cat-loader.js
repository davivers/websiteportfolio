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
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="flex"
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