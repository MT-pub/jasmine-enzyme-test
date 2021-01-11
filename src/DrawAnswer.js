import { Checkbox, FormControlLabel } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles';
import React from 'react'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export function DrawAnswer({a, aIndex, qIndex, answers, dispatch}) {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            color={answers ? "primary" : "secondary"}
            checked={a.checked}
            onChange={answers ? null : (event) =>
              dispatch({ type: "changeAnswer", event: event, qIndex: qIndex, aIndex: aIndex })
            }
          />
        }
        label={answers ? null : a.text}
      />
      {answers ?
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={a.correct}
            />
          }
          label={answers ? a.text : null} /> :
        null}
      <br />
    </div>
  )
}