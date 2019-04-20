import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: 13
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
      this.props.selectPosition(event.target.value)
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Position
          </InputLabel>
          <Select
            value={this.props.position}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Attacking Midfield">Attacking Midfield</MenuItem>
            <MenuItem value="Central Midfield">Central Midfield</MenuItem>
            <MenuItem value="Centre-Back">Centre-Back</MenuItem>
            <MenuItem value="Centre-Forward">Centre-Forward</MenuItem>
            <MenuItem value="Defensive Midfield">Defensive Midfield</MenuItem>
            <MenuItem value="Keeper">Keeper</MenuItem>
            <MenuItem value="Left Midfield">Left Midfield</MenuItem>
            <MenuItem value="Left Wing">Left Wing</MenuItem>
            <MenuItem value="Left-Back">Left-Back</MenuItem>
            <MenuItem value="Right-Back">Right-Back</MenuItem>
          </Select>
        </FormControl>
        
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
