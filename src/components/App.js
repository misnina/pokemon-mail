import React, { Component } from 'react';
import Editor from './Editor';
import Output from './Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "reply",
      text: "DPPt",
      title: "Dear Reader",
      body: "Use this to send pokemon mail! to your friends!",
      signature: "Love, Nina",
      stamp: 'a',
    }
    this.setMail = this.setMail.bind(this);
    this.setText = this.setText.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.setSignature = this.setSignature.bind(this);
    this.setStamp = this.setStamp.bind(this);
  }

  setMail(mail) {
    this.setState({ mail });
  }

  setText(text) {
    this.setState({ text });
  }

  setTitle(title) {
    this.setState({ title });
  }

  setBody(body) {
    this.setState({ body });
  }

  setSignature(signature) {
    this.setState({ signature });
  }

  setStamp(stamp) {
    this.setState({ stamp });
  }


  render() {
    let { mail, text, title, body, signature, stamp } = this.state;
    return (
      <div id="app" className="flex padding30">
        <Editor
          setMail={this.setMail}
          setText={this.setText}
          setTitle={this.setTitle}
          setBody={this.setBody}
          setSignature={this.setSignature}
          setStamp={this.setStamp}
        />
        <Output
          mail={mail}
          text={text}
          title={title}
          body={body}
          signature={signature}
          stamp={stamp}
        />
      </div>
    );
  }
}

export default App;
