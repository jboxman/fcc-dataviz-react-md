import React from 'react';
import {mdText} from '../md-example'

export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.exampleText
    }
  }

  render() {
    return (
      <textarea
        className="textarea"
        defaultValue={this.state.value}
        onKeyUp={this.props.onChange}></textarea>
    )
  }
}

Editor.propTypes = {
  onChange: React.PropTypes.func.isRequired
};

Editor.defaultProps = {
  exampleText: mdText
};
