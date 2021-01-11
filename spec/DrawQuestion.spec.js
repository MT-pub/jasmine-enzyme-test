import React from 'react';
import {shallow, mount} from 'enzyme';
//import { Checkbox, FormControlLabel } from '@material-ui/core'

import {DrawQuestion} from '../src/DrawQuestion';
//import { DrawAnswer } from '../src/DrawAnswer';

describe('DrawQuestion', () => {
  let params
  let wrapper
  const props = {
    testIndex:0,
    q:{
      text: "Mikä seuraavista on Ohmin laki?",
      answers: [{ text: "U = R * I", checked: false, correct: true },
      { text: "U = R / I", checked: false, correct: false },
      { text: "U = R^2 * I", checked: false, correct: false },
      { text: "U = R / I^2", checked: false, correct: false }]
    },
    qIndex:0,
    answers:false,
    dispatch:(callParams) => {
      params = callParams
    }
  };

  //renderöidään komponentti
  //shallow -> ei lapsikomponenttien renderöintiä
  //mount -> lapsikomponentit renderöidään
  beforeAll(() => {
    //väärä tapa
    /* wrapper = shallow(<DrawQuestion testIndex="0"
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
      }} />); */

      //oikea tapa, annettu props on näin näkyvillä testausfunktioille
      wrapper = shallow(<DrawQuestion {...props}/>)
  })

  beforeEach(() => {
    params = {}
    
  });

  afterEach(() => {
    
  })
 
  it('should contain correct text', () => {
    console.log("Löytyykö DrawQuestion")
    //console.log(wrapper.debug())
    expect(wrapper.text()).toContain(props.q.text);
  });

  it('should contain 4 `DrawAnswer` elements', () => {
    console.log("Löytyykö kaikki vastaukset")
    expect(wrapper.find('DrawAnswer').length).toBe(4)
    expect(wrapper.find('DrawAnswer')).toHaveSize(4)
  });

  xit('disabled test', () => {
    wrapper.simulate('click');

    expect(wrapper.props().onClick).toHaveBeenCalled();
  });
});