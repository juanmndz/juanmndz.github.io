// theme.js
import { extendTheme } from "@chakra-ui/react"
// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      '.js-focus-visible': {
        /*
      This will hide the focus indicator if the element receives focus    via the mouse,
      but it will still show up on keyboard focus.
      */
        outline: 'none',
        boxShadow: 'none'
      },
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      'html, body': {
        margin: 0,
        padding: 0,
        scrollBehavior: 'smooth'
      },
      body: {
        bg: "rgb(18, 18, 18)",
        color: "rgba(255, 255, 255, 0.87)",
        width: "100%",
        height: "100%",
        margin: '0px',
        padding: '0px',
        fontFamily: 'Roboto, Arial, sans-serif',
        textRendering: 'optimizelegibility'
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
})

export default theme

