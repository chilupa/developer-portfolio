import React from "react"
import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
} from "@material-ui/core"
import Description from "../Description/Description"
import Title from "../Title/Title"

const Card = ({ title, description }) => (
  <MuiCard>
    <CardContent>
      <Title text={title} />
      <Description>{description}</Description>
    </CardContent>
    <CardActions style={{ float: "right" }}>
      <Button size="small">Know more</Button>
    </CardActions>
  </MuiCard>
)

export default Card
