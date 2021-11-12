import { Flex, Text } from "@chakra-ui/layout";

interface InformationProps {
  description: string;
}

export function Information({description}: InformationProps){
  return(
    <Flex width='100%' flexDir={['column','column','row']} align={['center']}>
      <Flex width={["100%","100%","50%"]} justify={['center','center','flex-start']} mb={['30px','30px','0']}>
        <Text width="80%" ml={[0,0,"30px"]}>{description}</Text>
      </Flex>

      <Flex width={["100%","100%","50%"]} justify={["space-evenly"]} align='center'>
        <Flex flexDir='column' textAlign='center' >
          <Text fontWeight="600" color="yellow.600" fontSize="4xl" lineHeight="40px">50</Text>
          <Text fontSize="lg" lineHeight="32px" fontWeight="600" color="gray.700">Paises</Text>
        </Flex>
        <Flex flexDir='column' textAlign='center' >
          <Text fontWeight="600" color="yellow.600" fontSize="4xl" lineHeight="40px">60</Text>
          <Text fontSize="lg" lineHeight="32px" fontWeight="600" color="gray.700">linguas</Text>
        </Flex>
        <Flex flexDir='column' textAlign='center' >
          <Text fontWeight="600" color="yellow.600" fontSize="4xl" lineHeight="40px">27</Text>
          <Text fontSize="lg" lineHeight="32px" fontWeight="600" color="gray.700">
            cidades +100 
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}