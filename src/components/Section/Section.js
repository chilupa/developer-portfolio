import React from "react"
import { Box, Typography } from "@material-ui/core"

const Section = ({ children, ...props }) => (
  <Box {...props}>
    <Typography color="textPrimary" variant="body1">
      {children}
    </Typography>
  </Box>
)

export default Section
