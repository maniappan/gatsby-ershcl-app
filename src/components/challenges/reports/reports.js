import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

import blueGrey from "@material-ui/core/colors/blueGrey"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Fade from "@material-ui/core/Fade"
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
  VictoryLegend,
  VictoryTheme,
  VictoryPie
} from "victory"
import PieChart from "./pie-chart"
import BarChart from "./bar-chart"
import StackedBarChart from "./stacked-barchart"
import {
  transformToStateReport,
  transformStatusWisePriorityStackReport,
  transformPriortyWiseDomainStackReport,
  transformStatusWiseDomainStackReport,
  transformDomainWiseShowCaseNumbersReport
} from "../../../utils/data-transformer"

const stackColors = ["mediumseagreen", "orange", "#CCCC00", "turquoise"]

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    border: "1px solid silver",
    rounded: true,
    borderRadius: 5,
    shadowRadius: 5,
    width: 300,
    height: 300,
    flex: "1 0 auto"
  },
  subHeader: {
    padding: theme.spacing.unit,
    flex: 1
  }
})

class Reports extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  textLabelProvider = d => d.x
  numberLabelProvider = d => d.y

  render() {
    const { classes } = this.props

    return (
      <Fade in={true} timeout={50}>
        <div className={classes.root}>
          <Grid
            container
            spacing={16}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper} elevation={2}>
                <StackedBarChart
                  legendData={[
                    { name: "HIGH", symbol: { fill: stackColors[0] } },
                    { name: "LOW", symbol: { fill: stackColors[1] } },
                    { name: "MEDIUM", symbol: { fill: stackColors[2] } },
                    { name: "NONE", symbol: { fill: stackColors[3] } }
                  ]}
                  data={transformPriortyWiseDomainStackReport(this.props.data)}
                  tickFormat={[
                    "Web UI",
                    "Analytics",
                    "Microservices",
                    "Cloud",
                    "Mobility",
                    "DevOps",
                    "Security",
                    "Other"
                  ].sort((a, b) => (b < a ? 1 : -1))}
                  shortenTicks={true}
                  title="DOMAIN WISE STATUS"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper} elevation={2}>
                <PieChart
                  title={"Ideas by status".toUpperCase()}
                  data={transformToStateReport(this.props.data, "status")}
                  labelProvider={this.numberLabelProvider}
                  isNumber={true}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper} elevation={2}>
                <PieChart
                  title={"Ideas by priority".toUpperCase()}
                  data={transformToStateReport(this.props.data, "priority")}
                  labelProvider={this.textLabelProvider}
                  isNumber={false}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper} elevation={2}>
                <StackedBarChart
                  legendData={[
                    { name: "PENDING", symbol: { fill: stackColors[0] } },
                    { name: "BACKLOG", symbol: { fill: stackColors[1] } },
                    { name: "DONE", symbol: { fill: stackColors[2] } },
                    { name: "WIP", symbol: { fill: stackColors[3] } }
                  ]}
                  data={transformStatusWisePriorityStackReport(this.props.data)}
                  tickFormat={["High", "Medium", "Low", "None"].sort((a, b) =>
                    b < a ? 1 : -1
                  )}
                  title="PRIORITY WISE STATUS"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper} elevation={2}>
                <StackedBarChart
                  legendData={[
                    { name: "PENDING", symbol: { fill: stackColors[0] } },
                    { name: "BACKLOG", symbol: { fill: stackColors[1] } },
                    { name: "DONE", symbol: { fill: stackColors[2] } },
                    { name: "WIP", symbol: { fill: stackColors[3] } }
                  ]}
                  data={transformStatusWiseDomainStackReport(this.props.data)}
                  tickFormat={[
                    "Web UI",
                    "Analytics",
                    "Microservices",
                    "Cloud",
                    "Mobility",
                    "DevOps",
                    "Security",
                    "Other"
                  ].sort((a, b) => (b < a ? 1 : -1))}
                  title="STATUS WISE DOMAIN STATUS"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper} elevation={2}>
                <BarChart
                  title="DOMAIN WISE SHOWCASE PROJECT COUNT"
                  data={transformDomainWiseShowCaseNumbersReport(
                    this.props.data
                  )}
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Fade>
    )
  }
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Reports)
