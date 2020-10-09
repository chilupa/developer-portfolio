import React from "react"
import Layout from "../components/layout"
import projects from "../contants/projects"
import Card from "../components/Card/Card"
import { Box, Grid } from "@material-ui/core"
import PageHeading from "../components/PageHeading/PageHeading"

const Projects = () => (
  <Layout>
    <PageHeading>Projects</PageHeading>
    <Box pt={2}>
      <Grid container spacing={1} xs={12}>
        {projects.map((props, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Card {...props} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Layout>
)

export default Projects
