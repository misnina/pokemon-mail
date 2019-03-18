import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div id="header">
        To Chat:
      </div>
    )
  }
}

class Body extends Component {
  render() {
    return(
      <div id="body">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      </div>
    )
  }
}

class Signature extends Component {
  render() {
    return(
      <div id="signature">
        Nina
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
            <div id="spacer" className={this.props.spacer ? 'spacer' : 'nonspaced'}></div>
            <Header />
            <Body />
            <Signature />
          </div>
        </div>
      </div>
    );
  }
}

export default Output;