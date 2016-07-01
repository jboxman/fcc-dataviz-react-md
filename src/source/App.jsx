import React from 'react';
import marked from 'marked';

import {mdParsed} from './md-example'

import Editor from './components/Editor'
import Preview from './components/Preview'

/*

User Story: I can type GitHub-flavored Markdown into a text area.

User Story: I can see a preview of the output of my markdown that is updated as I type.

*/

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:mdParsed
    };
  }

  // I want to trigger parsing of the text by the md parser here
  onChangeHandler(e) {
    this.setState({
      data: marked(e.target.value)
    });
  }

  render() {
    return (
      <div>
        <Editor onChange={this.onChangeHandler.bind(this)} />
        <Preview data={this.state.data} />
      </div>
    )
  }
}
