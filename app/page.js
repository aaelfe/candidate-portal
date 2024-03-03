'use client'

import CandidateForm from "@/components/CandidateForm";
import { bucket } from "./firebase";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ResponsiveFormContainer from "@/components/ResponsiveFormContainer";
import HeaderBanner from "@/components/HeaderBanner";

const theme = extendTheme({
  colors: {
    "purple": {
      "50": "#EFECF9",
      "100": "#D2C9EE",
      "200": "#B4A6E3",
      "300": "#9783D8",
      "400": "#7A60CD",
      "500": "#5D3DC2",
      "600": "#4A319B",
      "700": "#382574",
      "800": "#25184E",
      "900": "#130C27"
    },
    "red": {
      "50": "#FCE8EB",
      "100": "#F8BFC7",
      "200": "#F395A3",
      "300": "#EF6C7F",
      "400": "#EA435C",
      "500": "#E31937",
      "600": "#B8142D",
      "700": "#8A0F21",
      "800": "#5C0A16",
      "900": "#2E050B"
    }
  },
})


export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <HeaderBanner />
      <ResponsiveFormContainer>
        <CandidateForm/> 
      </ResponsiveFormContainer>
    </ChakraProvider>
  );
}
