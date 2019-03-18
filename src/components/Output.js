import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div id="header">
        {this.props.title}:
      </div>
    )
  }
}

class Body extends Component {
  render() {
    return(
      <div id="body">
        {this.props.body}
      </div>
    )
  }
}

class Signature extends Component {
  render() {
    return(
      <div id="signature">
        {this.props.signature}
      </div>
    )
  }
}


class Output extends Component {
  render() {
    return (
      <div id="output" className="flex grow center">
        <div id="mail" className={`${this.props.mail} ${this.props.text}`}>
          <div id="content">
            <Header
              title={this.props.title}
            />
            <Body
              body={this.props.body}
            />
            <Signature
              signature={this.props.signature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Output;