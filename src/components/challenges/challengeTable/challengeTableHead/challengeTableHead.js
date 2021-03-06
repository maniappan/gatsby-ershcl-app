import React from 'react'
import PropTypes from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow  from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Tooltip from '@material-ui/core/Tooltip'
import getColumnData from '../../metadata'

class ChallengeTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property)
  }

  render() {
    const {
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props
    
    return (
      <TableHead>
        <TableRow>
{/*           <TableCell padding="checkbox">
            <Checkbox
              checked={numSelected === rowCount && numSelected > 0}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell> */}
          <TableCell padding="dense"></TableCell>
          {getColumnData(false).map(column => {
            return (
              column.visible &&
              <TableCell
                key={column.id}
                align="right"
                padding={column.disablePadding ? 'none' : 'dense'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title={column.helperText}
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            )
          }, this)}
        </TableRow>
      </TableHead>
    )
  }
}

ChallengeTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
}

export default ChallengeTableHead
