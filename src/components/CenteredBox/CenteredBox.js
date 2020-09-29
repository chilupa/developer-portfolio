import { Box } from "@material-ui/core"
import React from "react"

const CenteredBox = ({ children, ...props }) => (
  <Box display="flex" flexDirection="row" justifyContent="center" {...props}>
    {children}
  </Box>
)

export default CenteredBox
