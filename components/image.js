import { Img } from '@chakra-ui/image'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://mega.nz/file/P4ZnhKiB#HzoJ4UmfbautPlJi5RI7CMCKpN3F3Y-EYlgzs_YqyfM${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="/images/david.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}

export default Img