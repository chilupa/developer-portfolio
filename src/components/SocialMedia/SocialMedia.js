import { Box } from "@material-ui/core"
import React from "react"
import urls from "../../contants/urls"
import "./SocialMedia.css"

const SocialMedia = () => (
  <Box>
    {urls.map(({ url, component }, index) => (
      <a className="Anchor" key={index} href={url} target="_">
        {component}
      </a>
    ))}
  </Box>
)
export default SocialMedia
