/* eslint-disable @next/next/no-img-element */
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import {FiArrowLeft} from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

export function Header(){
  const router = useRouter()
  const { asPath} = useRouter()
  const [buttonBack, setButtonBack] = useState(false)

  const handleBackHome = ()=>{
    router.push('/')
  }

  useEffect(()=>{
    if(asPath !== '/'){
      setButtonBack(true)
    }
  },[asPath])

  return(
    <Flex width='100%' height='16' justifyContent='space-between' align='center' >
      <Flex 
        justifyContent={["center","center","flex-end"]}
        width={200}
      >
      {buttonBack ? (
        <Icon as={FiArrowLeft} fontSize={20} onClick={handleBackHome} cursor="pointer" transition="all 0.2s" _hover={{opacity:"0.7"}}/>
      ):
        <Flex></Flex>
      }
      </Flex>
      <Image src="/assets/Logo.svg" alt="Logo" style={{width:'150px'}}/>
      <Flex width={200}/>
    </Flex>
  )
}