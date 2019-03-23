import React, { Component } from 'react';
import download from 'downloadjs';
import domtoimage from 'dom-to-image';


const MAIL = [
  'reply',
  'greet',
  'like',
  'inqury',
  'RSVP',
  'thanks',
  'favored',
  'bridgeD',
  'bridgeM',
  'bridgeS',
  'bridgeT',
  'bridgeV',
]

const TEXT = [
  'DPPt',
  'GB',
  'RSE',
]

function DownloadButton(props) {
  return (
    <button
      onClick={() => { props.grabMail() }}
    >
      Download
    </button>
  )
}

function MailSelect(props) {
  return (
    <select
      name="mail"
      className="max-width"
      onChange={(event) => props.setMail(event.target.value)}
    >
      {MAIL.map(mail => {
        return (
          <option value={mail}>{mail}</option>
        )
      })}

    </select>
  )
}

function TextSelect(props) {
  return (
    <select
      name="text"
      className="max-width"
      onChange={(event) => props.setText(event.target.value)}
    >
      {TEXT.map(text => {
        return (
          <option value={text}>{text}</option>
        )
      })}

    </select>
  )
}

class Editor extends Component {
  render() {
    return (
      <div id="editor" className="flex column grow center">
        <form>
          <p>Title:
            <input
              className="max-width"
              type="text"
              onChange={(event) => this.props.setTitle(event.target.value)}
              maxlength={25}
            />
            <p>
            </p>
            Body:
            <textarea
              className="max-width"
              onChange={(event) => this.props.setBody(event.target.value)}
              maxlength={175}
            />
          </p>
          <p>
            Signature
            <input
              className="max-width"
              type="text"
              onChange={(event) => this.props.setSignature(event.target.value)}
              maxlength={15}
            />
          </p>
          <p>
            Stamp (type a character to get a stamp)
            <input
              className="max-width"
              type="text"
              onChange={(event) => this.props.setStamp(event.target.value)}
              maxlength={1}
            />
          </p>
        </form>
        <p>
          Stationary
          <MailSelect
            setMail={this.props.setMail}
          />
        </p>
        <p>
          Font Choice
          <TextSelect
            setText={this.props.setText}
          />
        </p>

        Grab an image of your mail and send it to a friend!
        <p>
          <DownloadButton
            grabMail={this.grabMail}
          />
        </p>
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