import React from 'react';
import { mount } from 'enzyme';
import { Checkbox, FormControlLabel } from '@material-ui/core'

import { DrawAnswer } from '../src/DrawAnswer';

describe('DrawAnswer', () => {
  let params
  let wrapper = mount(<DrawAnswer
    a={{ text: "U = R * I", checked: false, correct: true }}
    aIndex="0"
    qIndex="0"
    answers={false}
    dispatch={(callParams) => {
      params = callParams
    }} />);


  beforeAll(() => {
    /* wrapper = mount(<DrawAnswer
      a={{ text: "U = R * I", checked: false, correct: true }}
      aIndex="0"
      qIndex="0"
      dispatch={(callParams) => {
        params = callParams
      }} />); */
  })

  beforeEach(() => {
    params = {}

  });

  afterEach(() => {

  })

  it('should contain a `DrawAnswer` element', () => {
    //console.log("Debug-tulostus wrapperista: "+wrapper.debug())
    expect(wrapper.is('DrawAnswer')).toBe(true);
    //console.log(wrapper.text())
    console.log("Löytyykö DrawAnswer " + wrapper.exists(DrawAnswer))
    //console.log(wrapper.key())
  });

  it('should contain answer text', () => {
    console.log("Löytyykö vastausteksti")
    //console.log(wrapper.find(FormControlLabel).at(0).props())
    expect(wrapper.props().a.text).toBe("U = R * I")
    //expect(wrapper.find(FormControlLabel).props().label).toBe("U = R * I")
  });

    it('should contain a checkbox', () => {
      expect(wrapper.find(Checkbox)).toHaveSize(1);
    });
/*  
    it('should call the `onClick` handler when the button is clicked', () => {
      wrapper.simulate('click');
  
      expect(props.onClick).toHaveBeenCalled();
      console.log("Kolmas it")
    }); */
});