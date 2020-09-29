import React from "react"
import { Box, Typography } from "@material-ui/core"

const Title = ({ text, ...props }) => (
  <Box {...props}>
    <Typography color="primary" variant="body1">
      {text}
    </Typography>
  </Box>
)

export default Title
