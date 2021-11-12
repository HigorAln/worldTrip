import { Flex, Text } from "@chakra-ui/layout";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { TravelTypes } from "../components/TravelTypes/inde";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />  
      <TravelTypes />
      <Flex width='100%' fontWeight='600' fontSize='2xl' color="gray.400" mt={['36px','40px ']} fontFamily="sans-serif" justify='center'>_______</Flex>
      <Slide />
    </> 
  )
}
