import React from "react"
import {
  Box,
  Container,
  createMuiTheme,
  Divider,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core"
import Header from "./Header/Header"

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
    body1: {
      fontSize: "18px",
    },
  },
})

const Layout = ({ children }) => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Container>
      <Box p={4}>
        <Header />
        <Box pt={2} pb={2}>
          <Divider />
        </Box>
        {children}
      </Box>
    </Container>
  </ThemeProvider>
)

export default Layout
