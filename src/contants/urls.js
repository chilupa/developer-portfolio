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

const urls = [
  {
    url: "https://github.com",
    component: (
      <Box component="span" pl={1} pr={1}>
        <FaGithub fontSize="1.2em" className="SocialMedia" />
      </Box>
    ),
  },
  {
    url: "https://stackoverflow.com",
    component: (
      <Box component="span" pl={1} pr={1}>
        <FaStackOverflow fontSize="1.2em" className="SocialMedia" />
      </Box>
    ),
  },
  {
    url: "https://dev.to",
    component: (
      <Box component="span" pl={1} pr={1}>
        <FaDev fontSize="1.2em" className="SocialMedia" />
      </Box>
    ),
  },
  {
    url: "https://medium.com/",
    component: (
      <Box component="span" pl={1} pr={1}>
        <FaMedium fontSize="1.2em" className="SocialMedia" />
      </Box>
    ),
  },
  {
    url: "https://www.linkedin.com/",
    component: (
      <Box component="span" pl={1} pr={1}>
        <FaLinkedin fontSize="1.2em" className="SocialMedia" />
      </Box>
    ),
  },
]

export default urls
