import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import { RichText } from "prismic-dom";

interface Cidades {
  trumbnail:{
    url: string;
  }
  estado: [];
  name_the_cidy: [];
}


export function City({cidades}){
  return(
    <Flex width="100%" flexWrap="wrap" mt={['35px','40px',"100px"]}>
      <Text fontSize="4xl" color="gray.700" fontWeight="600" mb="40px" ml={['30px',"30px"]}>Cidades +100</Text>

      <Flex w="100%" flexWrap="wrap" justify={["center","center","flex-start"]}>
        {cidades.map((element: Cidades,index)=>(
          <Flex
            key={index}
            flexDir="column"
            w={['263px',"200px"]}
            h="279px"
            boxSize="border-box"
            border='1px solid rgba(255,186,8,0.2)'
            mx="20px"
            mt="20px"
            borderRadius="5"
          >
            <Image src={element.trumbnail.url} alt={RichText.asText(element.estado)} width="100%" h="173px"/>
            <Flex flexDir="column" p='20px'>
              <Text fontWeight="500" fontSize="medium" color="gray.700">{RichText.asText(element.name_the_cidy)}</Text>
              <Text fontSize="small" fontWeight="500" color="gray.500" mt='10px'>{RichText.asText(element.estado)}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}