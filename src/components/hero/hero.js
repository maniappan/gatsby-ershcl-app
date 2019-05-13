import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const Hero = ({ classes, heroImage, heroHeading, heroSubHeading, heroStyles }) => {
  return (
    <div className={classes.card}>
      <div className={classes.container} >
        <img src={heroImage} className={classes.responsive} />
        <Typography component="h4" variant="h4" className={classes.topLeft} style={heroStyles}>
          <strong>{heroHeading}</strong>
        </Typography>
        <Typography component="h5" variant="h5" className={classes.topLeftTwo} style={heroStyles}>
          {heroSubHeading}
        </Typography>
      </div>
    </div>
  )
}
export default withStyles(
  theme => ({
    responsive: {
      width: "100%",
      maxHeight: 580,
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
    },
    topLeft: {
      position: "absolute",
      top: "8px",
      left: "16px"
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
