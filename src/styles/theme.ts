import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    white:{
      "900":"#F5F8FA",
      "600":"#DADADA"
    },
    gray:{
      "700": "#47585B"
    },
    yellow:{
      "600":"#FFBA08"
    }
  },
  fonts:{
    heading: 'Poppins',
    body: 'Poppins'
  },
})