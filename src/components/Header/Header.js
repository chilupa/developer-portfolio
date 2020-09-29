import React from "react"
import { Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import CenteredBox from "../CenteredBox/CenteredBox"
import routes from "../../contants/routes"
import SocialMedia from "../SocialMedia/SocialMedia"

const ListLink = ({ to, children }) => (
  <Typography variant="body2">
    <Link to={to}>{children}</Link>
  </Typography>
)

const Header = () => (
  <Box>
    <Box>
      <Typography align="center" variant="h3">
        Jon Doe
      </Typography>
    </Box>
    <CenteredBox p={2}>
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
