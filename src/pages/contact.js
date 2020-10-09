import React from "react"
import { Link } from "@material-ui/core"
import Layout from "../components/layout"
import Section from "../components/Section/Section"
import PageHeading from "../components/PageHeading/PageHeading"

const Contact = () => (
  <Layout>
    <PageHeading>Contact</PageHeading>
    <Section pt={3}>
      Thank you for your time. I'd love to hear feedback from you. Please reach
      out to me at{" "}
      <Link
        href="mailto:ichilupa@gmail.com?subject=Dev Portfolio Feedback"
        target="_"
        rel="noopener noreferrer"
      >
        ichilupa@gmail.com
      </Link>
    </Section>
  </Layout>
)

export default Contact
