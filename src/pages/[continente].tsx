import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../components/Header";
import { getPrismicClient } from "../Service/prismic";
import {RichText} from 'prismic-dom'
import { Flex, Text } from "@chakra-ui/layout";
import { Information } from '../components/continente/Information/index';
import { City } from "../components/continente/City";

interface ContinenteProps {
  continente: {
    id: string;
    banner: string;
    title: string;
    description: string;
    cidades: Cidades[];
  }
}

interface Cidades {
  trumbnail:{
    url: string;
  }
  estado: [];
  name_the_cidy: [];
}



export default function Continente({continente}: ContinenteProps){
  return(
    <>
      <Header />
      <img src={continente.banner} alt={`Imagem da ${continente.title}`} height={500} width="100%"/>

      <Flex width="100%" justifyContent='center' mb='100px'>
        <Flex width="1000px" maxW="1000px" flexDir='column' >
          <Text fontSize="5xl" fontWeight='600' color="white.900" mt={["-100px","-120px","-150px"]} textAlign={["center","center",'start']} ml={[0,0,'30px']} mb={["80px","120px","150px"]}>{continente.title}</Text>
          
          <Information description={continente.description} />

          <City cidades={continente.cidades} />

        </Flex>
      </Flex>
    </> 
  )
}


export const getStaticPaths: GetStaticPaths= async ()=>{
  return{
    paths: [],
    fallback: "blocking"
  }
}


export const getStaticProps: GetStaticProps = async (ctx)=>{
  const {continente} = ctx.params;

  const prismic = getPrismicClient()
  const value = await prismic.getByUID('continente', String(continente), {})

  const objeto = {
    id: value.id,
    banner: value.data.banner.url,
    title: RichText.asText(value.data.title),
    description: RichText.asText(value.data.description),
    cidades: value.data.cidades,
  }
  return{
    props:{
      continente: objeto
    }
  }
}