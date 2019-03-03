import React from "react"
import Helmet from "react-helmet"
import Navigation from "./navigation/navigation"
import withRoot from "./withRoot"
import { StaticQuery, graphql } from "gatsby"

const Index = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <Helmet
            defaultTitle={`ERS-HCL Github Site`}
            titleTemplate={`%s | ERS-HCL`}
          >
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
            />

            <meta name="twitter:site" content="@TarunKumarSukhu" />
            <meta name="og:type" content="website" />
            <meta name="og:site_name" content="ERS-HCL" />
            <meta
              name="Description"
              content="ERS-HCL Open Source initiative static website"
            />
            <meta property="og:url" content="https://ers-hcl.github.io/" />
            <meta
              property="og:description"
              content="ERS-HCL Open Source initiative static website"
            />
            <html lang="en" />
          </Helmet>
          <header>
            <Navigation title={data.site.siteMetadata.title} />
          </header>
          {children}
        </div>
      </>
    )}
  />
)

export default withRoot(Index)
