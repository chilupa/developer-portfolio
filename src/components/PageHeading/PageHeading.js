import React from "react"
import { Box, Typography } from "@material-ui/core"

const PageHeading = ({ children }) => (
  <Box pt={2} pb={2}>
    <Typography variant="h4" style={{ fontWeight: "600" }} color="textPrimary">
      {children}
    </Typography>
  </Box>
)

export default PageHeading
