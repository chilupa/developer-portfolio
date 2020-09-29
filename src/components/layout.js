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
  },
})

const Layout = ({ children }) => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Container>
      <Header />
      <Box pt={2} pb={2}>
        <Divider />
      </Box>
      {children}
    </Container>
  </ThemeProvider>
)

export default Layout
