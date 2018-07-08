import React from 'react';
import { render, mount } from 'enzyme';

import NoItems from './NoItems';

describe('>>>NoItems', () => {
  let wrapper;
  const text = 'No items';
  const child = 'Child';

  const item = (
    <NoItems text={text}>
      <div>
        {child}
      </div>
    </NoItems>
  );

  it('render the component', () => {
    wrapper = render(item);

    expect(wrapper.length).toEqual(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('formats text correct', () => {
    wrapper = render(item);

    expect(wrapper.find('p').text()).toEqual(text);
  });

  it('contains child component', () => {
    wrapper = mount(item);

    expect(wrapper.contains(
      <div>
        {child}
      </div>,
    )).toBe(true);
  });
});
