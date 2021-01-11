import React from 'react';
import {mount} from 'enzyme';
//import { Checkbox, FormControlLabel } from '@material-ui/core'

import {DrawQuestion} from '../src/DrawQuestion';
//import { DrawAnswer } from '../src/DrawAnswer';

describe('DrawQuestion', () => {
  let params
  let wrapper
  const props = {
    testIndex:0,
    q:{
      question: "Mikä seuraavista on Ohmin laki?",
      answers: [{ answer: "U = R * I", checked: false, correct: true },
      { answer: "U = R / I", checked: false, correct: false },
      { answer: "U = R^2 * I", checked: false, correct: false },
      { answer: "U = R / I^2", checked: false, correct: false }]
    },
    qIndex:0,
    answers:'false',
    dispatch:(callParams) => {
      params = callParams
    }
  };

  beforeAll(() => {
    wrapper = mount(<DrawQuestion testIndex="0"
      q={{
        text: "Mikä seuraavista on Ohmin laki?",
        answers: [{ text: "U = R * I", checked: false, correct: true },
        { text: "U = R / I", checked: false, correct: false },
        { text: "U = R^2 * I", checked: false, correct: false },
        { text: "U = R / I^2", checked: false, correct: false }]
      }}
      qIndex="0"
      answers='false'
      dispatch={(callParams) => {
        params = callParams
      }} />);
  })

  beforeEach(() => {
    params = {}
    
  });

  afterEach(() => {
    
  })
 
  it('should contain a `DrawQuestion` element', () => {
    //console.log(wrapper.props())
    //console.log(wrapper.debug())
    expect(wrapper.is('DrawQuestion')).toBe(true);
    //console.log("Löytyykö DrawQuestion "+wrapper.exists(DrawQuestion))
  });

  it('should contain 4 `DrawAnswer` elements', () => {
    expect(wrapper.find('DrawAnswer').length).toBe(4)
    expect(wrapper.find('DrawAnswer')).toHaveSize(4)
    //console.log("Löytyykö kaikki vastaukset")
    //console.log(wrapper.find(DrawAnswer).length)
    //console.log(wrapper.find('[label="U = R / I"]').first().html())
  });

/*   xit('should contain the label passed to it', () => {
    expect(wrapper.text()).not.toBe(props.label);
    console.log("Toka it")
  }); */

  xit('disabled test', () => {
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });
});