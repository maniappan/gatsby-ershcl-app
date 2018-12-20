import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: '-webkit-sticky',
    position: 'sticky',
    bottom: '1rem',
    alignSelf: 'flex-end'
  },
  root: {
    display: 'flex',
    flexDirection: 'row'
  }
})

function FloatingActionButtons(props) {
  const { classes, onClickEdit, onClickDelete } = props
  return (
    <div className={classes.root}>
      <Fab 
        size="small"
        color="secondary"
        aria-label="edit"
        className={classes.button}
        onClick={onClickEdit}
      >
        <EditIcon />
      </Fab>
      <Fab 
        size="small"
        aria-label="delete"
        className={classes.button}
        onClick={onClickDelete}
      >
        <DeleteIcon />
      </Fab>
    </div>
  )
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FloatingActionButtons)
