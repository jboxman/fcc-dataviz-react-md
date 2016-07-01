import React from 'react';

export default class Preview extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  createMarkup(data) {
    return {__html: data};
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup(this.props.data)}></div>
    )
  }
}
