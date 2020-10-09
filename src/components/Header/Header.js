import React from "react"
import { Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import CenteredBox from "../CenteredBox/CenteredBox"
import routes from "../../contants/routes"
import SocialMedia from "../SocialMedia/SocialMedia"
import "./Header.css"

const ListLink = ({ to, children }) => (
  <Link activeClassName="ActiveClass" to={to}>
    <Typography variant="body1" color="textPrimary">
      {children}
    </Typography>
  </Link>
)

const Header = () => (
  <Box>
    <Box>
      <Typography align="center" variant="h3">
        Pavan Chilukuri
      </Typography>
    </Box>
    <CenteredBox p={3}>
      <SocialMedia />
    </CenteredBox>
    <CenteredBox>
      {routes.map(({ to, page }, index) => (
        <Box key={index} pl={2} pr={2}>
          <ListLink to={to}>{page}</ListLink>
        </Box>
      ))}
    </CenteredBox>
  </Box>
)

export default Header
