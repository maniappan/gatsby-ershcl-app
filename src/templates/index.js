import React from 'react'
import Home from '../components/home/home'
import { graphql } from 'gatsby'

export default ({ data, pageContext }) => {
  const content = {
    blogPosts: {
      totalCount: data.allMdx.totalCount,
      pageContext: pageContext
    },
    buildTime: data.site.buildTime
  }
  return (
    <div>
      <Home {...content} />
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      buildTime
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
