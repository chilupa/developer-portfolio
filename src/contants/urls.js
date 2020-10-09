import React from "react"
import { Box } from "@material-ui/core"
import {
  FaGithub,
  FaStackOverflow,
  FaLinkedin,
  FaMedium,
  FaDev,
} from "react-icons/fa"
import "../components/SocialMedia/SocialMedia.css"

const props = {
  fontSize: "30px",
  className: "SocialMedia",
}

const urls = [
  {
    url: "https://github.com",
    component: (
      <Box component="span" pl={1}>
        <FaGithub {...props} />
      </Box>
    ),
  },
  {
    url: "https://stackoverflow.com",
    component: (
      <Box component="span" pl={1}>
        <FaStackOverflow {...props} />
      </Box>
    ),
  },
  {
    url: "https://dev.to",
    component: (
      <Box component="span" pl={1}>
        <FaDev {...props} />
      </Box>
    ),
  },
  {
    url: "https://medium.com/",
    component: (
      <Box component="span" pl={1}>
        <FaMedium {...props} />
      </Box>
    ),
  },
  {
    url: "https://www.linkedin.com/",
    component: (
      <Box component="span" pl={1}>
        <FaLinkedin {...props} />
      </Box>
    ),
  },
]

export default urls
