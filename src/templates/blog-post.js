import React from "react"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  divStyle: {
    fontFamily: "Montserrat, sans-serif"
  },
  card: {
    width: "100%",
    margin: 5,
    minHeight: "100vh",
    alignContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowRadius: 5,
    border: "1px grey",
    boxShadow: "3px 3px 3px rgba(68,68,68,0.6)"
  }
})

export default ({ data }) => {
  const post = data.mdx
  let author = null
  if (post.frontmatter.author) {
    author = <h4>Author: {post.frontmatter.author}</h4>
  }
  return (
    <Layout>
      <Card className={styles.card}>
        <CardHeader title={post.frontmatter.title} subheader={author} />
        <CardContent className={styles.divStyle}>
          <Typography component="div" variant="body1">
          <MDXRenderer>{post.code.body}</MDXRenderer>
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code{
        body
      }
      frontmatter {
        title
        author
      }
    }
  }
`
