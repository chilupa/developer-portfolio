import React from "react"
import Layout from "../components/layout"
import projects from "../contants/projects"
import Card from "../components/Card/Card"
import { Grid } from "@material-ui/core"

const Projects = () => (
  <Layout>
    <Grid container spacing={1} xs={12}>
      {projects.map((props, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <Card {...props} />
        </Grid>
      ))}
    </Grid>
  </Layout>
)

export default Projects
