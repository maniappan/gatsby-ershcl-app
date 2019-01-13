import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { challengeHeaderStyles } from '../../../style/components/challenges/challenges'


const techSMES = [
  { id: 0, technology: 'DevOps', SME:'Lavanya Subbarayulu, S Karthikeyan'},
  { id: 1, technology: 'Microservices', SME:'Vinod Kumar, Tarun Kumar Sukhu'},
  { id: 2, technology: 'Web UI', SME:'Tarun Kumar Sukhu'},
  { id: 3, technology: 'Analytics', SME:'Ritesh Sinha'},
  { id: 4, technology: 'Cloud', SME:'Suresh Kosuru'},
  { id: 5, technology: 'BigData', SME:'TBD'},
];

class ChallengeHeader extends React.Component {
  render() {
    const { classes } = this.props
    const headerText = `ERS-HCL Ideas`
    const paragraphText = `Welcome to ERS GitHub Ideas page, Now you can host your own tech idea or pick an Open Source idea . This is an opportunity to demonstrate proficiency in the Technical problem solving skills as well as  learn new technologies. Select one of the domain specific idea and create a new git repository for that project. Organize your code within that repo -- when you get to a stopping point, commit and push your code and email a link to your repo to 'opensource@hcl.com'`
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/idea.jpg"
          title="HCL ERS"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {headerText}
          </Typography>
          <Typography component="p">
            {paragraphText}
          </Typography>
          <br/>
          <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading} variant="h4">ERS Open Source Panel</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <span className={classes.expansion}>
                <Typography variant="body2">
                  Following SMEs are part of the ERS Open Source Panel . <br/>They are core to driving this initiative and have following responsibilities
              </Typography>
                <Typography variant="body2" component="ul">
                  <ul>
                    <li><Typography>Review TECHNOLOGY Open source submissions for quality when required. SME can take help from others on this</Typography></li>
                    <li><Typography>Identify one quality Challenge/Idea per quarter to be shared on Github</Typography></li>
                    <li><Typography>Implement some of the Challenges/ Ideas</Typography></li>
                    <li><Typography>Identify ways to build TECHNOLOGY competency by curating list of online courses, assignments</Typography></li>
                    <li><Typography>Recommend the top quality TECHNOLOGY forums where our team should contribute</Typography></li>
                  </ul>

                </Typography>

                <Paper className={classes.rootTable}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Technology</TableCell>
                        <TableCell align="left">SME</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {techSMES.map(row => {
                        return (
                          <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                              {row.technology}
                            </TableCell>
                            <TableCell align="left">{row.SME}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>


              </span>

            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardContent>
      </Card>

    )
  }
}

ChallengeHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(challengeHeaderStyles)(ChallengeHeader)
