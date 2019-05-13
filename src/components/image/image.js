import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Img from "gatsby-image"

const Image = ({ imageName, bypassImage, classes }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: allFile {
          edges {
            node {
              name
              publicURL
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 550) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={({ placeholderImage }) => {
      const displayImageName = placeholderImage.edges.find(
        ({ node }) => node.name === imageName
      )
      const displayImage = imgName => {
        if (typeof bypassImage === 'undefined' && imgName.node.childImageSharp !== null) {
          return (
            <Paper className={classes.paper}>
              <Img fluid={imgName.node.childImageSharp.fluid} />
            </Paper>
          )
        } else
          return (
            <img
              src={imgName.node.publicURL}
              alt={imgName.node.publicURL}
              className={classes.imgResponsive}
            />
          )
      }
      return (
        <div className={classes.paper}>{displayImage(displayImageName)}</div>
      )
    }}
  />
)
export default withStyles(
  {
    paper: {
      display: "block",
      alignContent: "center",
      alignItems: "center",
    },
    imgResponsive: {
      width: "100%",
      height: "auto"
    }
  },
  { withTheme: true }
)(Image)
