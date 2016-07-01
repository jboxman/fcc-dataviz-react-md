import test from 'tape';
import React from 'react';
import Preview from '../src/source/components/Preview';

import {mount} from 'enzyme';

test('<Preview />', t => {
  t.test('it displays HTML content', t => {
    t.plan(1);
    const data = '<h1><em>title</em></h1>';
    const wrapper = mount(<Preview data={data} />);
    t.equal(wrapper.find('div').html(), `<div>${data}</div>`);
  });
});

/*
test('App counter', t => {
  t.test('it has an initial count of 0', t => {
    t.plan(1);
    const wrapper = mount(<App />);
    t.equal(wrapper.find('p').text(), '0');
  });

  t.test('clicking increments the count', t => {
    t.plan(1);
    const wrapper = mount(<App />);
    wrapper.find('button').simulate('click');
    t.equal(wrapper.find('p').text(), '1');
  });
});
*/
