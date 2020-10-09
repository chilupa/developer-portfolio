import React from "react"
import { Link } from "@material-ui/core"
import Layout from "../components/layout"
import Section from "../components/Section/Section"
import PageHeading from "../components/PageHeading/PageHeading"

const Home = () => (
  <Layout>
    <PageHeading>About me</PageHeading>
    <Section pt={2}>
      I'm a Full Stack Developer. I work on React, Angular, Node.js.
    </Section>
    <Section pt={1} pb={1}>
      I've contributed to several open source projects like Docker, Ionic and I
      also write articles on Medium, Dev out of which{" "}
      <Link
        color="primary"
        href="https://dev.to/chilupa/state-usage-in-functional-and-class-components-in-react-l8h"
        target="_"
      >
        State usage in React
      </Link>{" "}
      and{" "}
      <Link
        color="primary"
        href="https://medium.com/@chilupa/understanding-of-angular-6-http-requests-1e520ffa3fc5"
        target="_"
      >
        HTTP requests in Angular
      </Link>{" "}
      gained 1000+ views.
    </Section>

    <Section pt={1} pb={1}>
      A Photographer by hobby.
    </Section>
  </Layout>
)

export default Home
