import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useRouter } from 'next/router'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import styles from "./styles.module.scss"

SwiperCore.use([Navigation, Pagination]);


export function Slide(){
  const router = useRouter()

  const handleEuropa =()=>{
    router.push('/europa')
  }

  return(
    <>
      <Text textAlign="center" mt={10} fontSize={['20px','lg',"3xl"]} color="gray.700" fontWeight='500' lineHeight="54px"> 
        Vamos nessa?<br/> Então escolha seu continente
      </Text>

      <Swiper navigation={true} pagination={true} className={styles.swiperSlide} >
        <SwiperSlide className={styles.swiperSlide1} onClick={handleEuropa}>
          <Text color="white.900" fontWeight="600" fontSize={['lg','2xl','4xl']} px={['10px',0]}>Europa</Text>
          <Text color='white.600' fontWeight='600' fontSize={['lg','xl']}>O continente mais antigo.</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide2}>
          <Text color="white.900" fontWeight="600" fontSize={['lg','2xl','4xl']}>Africa</Text>
          <Text color='white.600' fontWeight='600' fontSize={['lg','xl']}>A região que mais cresce no mundo</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide3}>
          <Text color="white.900" fontWeight="600" fontSize={['lg','2xl','4xl']}>America</Text>
          <Text color='white.600' fontWeight='600' fontSize={['lg','xl']}>Saiba por que e o continente mais procurado.</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide4}>
          <Text color="white.900" fontWeight="600" fontSize={['lg','2xl','4xl']}>Asia</Text>
          <Text color='white.600' fontWeight='600' fontSize={['lg','xl']}>Saiba por que e o continente mais procurado.</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide5}>
          <Text color="white.900" fontWeight="600" fontSize={['lg','2xl','4xl']}>Oceania</Text>
          <Text color='white.600' fontWeight='600' fontSize={['lg','xl']}>Saiba por que e o continente mais procurado.</Text>
        </SwiperSlide>

    </Swiper>
    </>
  )
}