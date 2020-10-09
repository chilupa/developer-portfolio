import { Box, Link } from "@material-ui/core"
import React from "react"
import urls from "../../contants/urls"
import "./SocialMedia.css"

const SocialMedia = () => (
  <Box>
    {urls.map(({ url, component }, index) => (
      <Link key={index} href={url} target="_">
        {component}
      </Link>
    ))}
  </Box>
)
export default SocialMedia
