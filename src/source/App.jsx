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
<section id="main" className="container-fluid">
  <header className="pageheader text-center">
    <h1>Markdown Previewer</h1>
  </header>
  <div className="row">
    <div className="col-md-6">
      <div id="editor">
        <Editor onChange={this.onChangeHandler.bind(this)} />
      </div>
    </div>
    <div className="col-md-6">
      <Preview data={this.state.data} />
    </div>
  </div>
  <footer className="text-center">
    Crafted by Jason Boxman.
    Inspired by <a href="https://codepen.io/FreeCodeCamp/full/JXrLLE/">
      FreeCodeCamp : Build a Markdown Previewer</a>.
  </footer>
</section>
    )
  }
}
