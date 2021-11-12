import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

interface TravelProps {
  url:string;
  name: string;
}

export function Travel({url, name}: TravelProps){
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg:false,
  })

  return(
    <Flex
      flexDir={["row","row","column"]}
      mx={[5,5,20]}
      mt={[0,0,3]}
      textAlign='center'
      align='center'
    >
      {!isMobile && <Image src={url} alt={name} mb={4} width='80px' height="80px"/>}
      <Text color='gray.700' fontWeight="600" _before={{content:"'. '", margin:"20px 0", fontSize:"50px", color:"yellow.600"}}>
        {name}
      </Text>
    </Flex>
  )
}