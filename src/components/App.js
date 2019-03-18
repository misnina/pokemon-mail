import React, { Component } from 'react';
import Editor from './Editor';
import Output from './Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "reply",
      text: "DPPt",
      spacer: false,
    }
    this.setMail = this.setMail.bind(this);
    this.setText = this.setText.bind(this);
    this.setSpacer = this.setSpacer.bind(this);
  }

  setSpacer(bool) {
    this.setState({spacer: bool});
  }

  setMail(mail) {
    this.setState({mail: mail});
  }

  setText(text) {
    this.setState({text: text});
  }

  render() {
    let { mail, text, spacer } = this.state;
    return (
      <div id="app" className="flex padding30">
        <Editor 
          setMail={this.setMail}
          setText={this.setText}
          setSpacer={this.setSpacer}
        />
        <Output 
          mail={mail}
          text={text}
          spacer={spacer}
        />
      </div>
    );
  }
}

export default App;
