import React from "react"
import { Box, Typography } from "@material-ui/core"

const Description = ({ children, ...props }) => (
  <Box {...props}>
    <Typography color="textSecondary" variant="body2">
      {children}
    </Typography>
  </Box>
)

export default Description
