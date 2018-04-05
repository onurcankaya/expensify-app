import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/header'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(toJSON(wrapper)).toMatchSnapshot()

  // expect(wrapper.find('h1').length).toBe(1)
  // const renderer = new ReactShallowRenderer()
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})
