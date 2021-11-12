import {Flex, Text, Image, useBreakpointValue} from '@chakra-ui/react'

export function Banner(){
  const isMobile = useBreakpointValue({
    base: true,
    md: true,
    lg:false,
  })
  return(
    <Flex bgImage={'/assets/banner.svg'} height={["163px","368"]} width='100%' bgRepeat='no-repeat'>
      <Flex
        width={["100%","100%",'100%',"50%"]}
        height={['163px','368']}
        justify='center'
        flexDir='column'
        pl={['4',"20",'28']}
      >
        <Text fontSize={["20px","3xl"]} fontWeight="500" color="white.900">
          5 Continentes,<br/> infinitas possibilidades.
        </Text>
        <Text fontSize={['14px','lg']} fontWeight='400' color="white.600" mt={4} mb={[5,10,16]}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
     {!isMobile &&(
        <Flex justify='center' align='center' width="50%">
          <Image src="/assets/Airplane.svg" alt="Airplane" marginBottom={-12} />
        </Flex>
     )}
    </Flex>
  )
}