import React from "react"
import { Box, Card as MuiCard, CardContent, Link } from "@material-ui/core"
import Description from "../Description/Description"
import Title from "../Title/Title"
import { FaGithub } from "react-icons/fa"
import { IoIosRocket } from "react-icons/io"
import "./Card.css"

const IconLink = ({ url, repo, children }) => {
  console.log("repo", repo)
  return (
    <Link
      color="textPrimary"
      href={url ? url : repo}
      target="_"
      rel="noopener"
      onClick={() => console.log("link clicked", repo)}
      className="CardActionIcon"
    >
      {children}
    </Link>
  )
}

const Card = ({ title, description, repo, url }) => (
  <MuiCard style={{ height: "100%" }}>
    <CardContent>
      <Title text={title} />
      <Description>{description}</Description>
      {repo && url && (
        <Box style={{ float: "right" }}>
          {repo && (
            <IconLink repo={repo}>
              <FaGithub />
            </IconLink>
          )}
          {url && (
            <IconLink url={url}>
              <IoIosRocket />
            </IconLink>
          )}
        </Box>
      )}
    </CardContent>
  </MuiCard>
)

export default Card
