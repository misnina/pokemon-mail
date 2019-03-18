import React, { Component } from 'react';
import download from 'downloadjs';
import domtoimage from 'dom-to-image';


const MAIL = [
  'reply',
  'greet',
  'like',
]

function DownloadButton(props) {
  return (
    <button onClick={() => {props.grabMail()}}>
      Download
    </button>
  )
}

function MailSelect(props) {
  return (
    <select name="mail" onChange={(event) => props.setMail(event.target.value)}>
      {MAIL.map(mail => {
        console.log(mail);
        return (
          <option value={mail}>{mail}</option>
        )
      })}
    
    </select>
  )
}

class Editor extends Component {
  render() {
    return (
      <div id="editor" className="flex grow center">
        <form>
          <input 
            type="text" 
            onChange={(event) => this.props.setTitle(event.target.value)}
          />
          <textarea
            onChange={(event) => this.props.setBody(event.target.value)}
          />
          <input
            type="text"
            onChange={(event) => this.props.setSignature(event.target.value)}
          />
        </form>
        <MailSelect
          setMail={this.props.setMail}
        />
        <DownloadButton
          grabMail={this.grabMail}
         />
      </div>
    );


  }

  grabMail() {
    domtoimage.toPng(document.getElementById('mail'))
      .then(dataURL => {
        download(dataURL, 'mail.png');
      })
  }
}

export default Editor;