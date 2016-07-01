import test from 'tape';
import React from 'react';
import Editor from '../src/source/components/Editor';
import {mdText} from '../src/source/md-example'

import {mount} from 'enzyme';

test('<Editor />', t => {

  // The component expects a handler
  const props = {onChange:() => {}}

  t.test('it displays default content', t => {
    t.plan(1);
    const wrapper = mount(<Editor {...props} />);
    t.equal(wrapper.find('textarea').text(), mdText);
  });

});
