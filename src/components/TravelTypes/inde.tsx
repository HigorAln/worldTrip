import { Flex, Stack } from "@chakra-ui/layout";
import { Travel } from "./Travel";

export function TravelTypes(){
  return(
    <Flex
      justify='center'
      align='center'
      height={205}
      flexWrap='wrap'
      mt={[15,20,50]}
    >
      <Travel url='/assets/cokitel.svg' name='Vida noturna'/>
      <Travel url='/assets/surf.svg' name='Praia'/>
      <Travel url='/assets/building.svg' name='Moderno'/>
      <Travel url='/assets/museum.svg' name='classico'/>
      <Travel url='/assets/earth.svg' name='e mais...'/>
    </Flex>
  )
}