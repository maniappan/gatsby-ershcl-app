import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const Hero = ({ classes }) => (
  <div className={classes.card}>
    <div className={classes.container}>
      <img src="/images/showcase2.jpg" className={classes.responsive} />
      <Typography component="h4" variant="h4" className={classes.topLeft}>
        <strong>ERS HCL Open Source</strong>
      </Typography>
      <Typography component="h5" variant="h5" className={classes.topLeftTwo}>
        Projects Showcase
      </Typography>
    </div>
  </div>
)
export default withStyles(
  theme => ({
    responsive: {
      width: "100%",
      maxHeight: 400,
      height: "auto"
    },
    card: {
      alignSelf: "auto",
      flex: "1 1 auto",
      height: "100%",
      flexDirection: "column",
      justifyContent: "flex-start",
      theme: "inherit",
      alignContent: "center"
    },
    container: {
      position: "relative",
      textAlign: "center",
      color: "black"
    },
    topLeft: {
      position: "absolute",
      top: "8px",
      left: "16px",
    },
    topLeftTwo: {
      position: "absolute",
      top: "50px",
      left: "25px"
    },
    [theme.breakpoints.down("xs")]: {
      topLeft: {
        top: "8px",
        left: "16px",
        fontSize: 20
      },
      topLeftTwo: {
        top: "30px",
        left: "25px",
        fontSize: 18
      }
    }
  }),
  { withTheme: true }
)(Hero)
