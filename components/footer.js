import { Box } from '@chakra-ui/react'
import Form from './form'
const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} David Lima. All Rights Reserved.
    </Box>

  )

}

export default Footer