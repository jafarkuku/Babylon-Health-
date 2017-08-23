import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
/**
* Test for <LabelComponent /> ComponentType component.
* @test {Label}
*/
import LabelComponent from '../src/components/Labelcomponent';

const props = {
  label: 'labelProp',
}

describe('<LabelComponent />', () => {
  it('should render the Label Component', () => {
    const wrapper = shallow(<LabelComponent />);
    expect (wrapper.find('span')).to.have.length(1);
  });

  it('should render a string', () => {
    const wrapper = shallow(<LabelComponent { ...props } />);
    console.log('TEST:',wrapper.find('span').text())
    expect(wrapper.find('span').text()).to.equal('labelProp');
  });
});
