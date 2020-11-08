import React, { Component } from 'react'
import {notes} from '../notes/data.js'
import './style/home.scss'
export default class Home extends Component {
  render() {
    console.log(notes);
    let noteList = notes.map((note, index) => {
      return (
        <li className="note-item" key={index}>
          <h3 className="note-title">{note.title}</h3>
          <div className="note-desc">
            <span className="note-date">{note.date}</span>
            {
              note.tags.map((tag) => <span key={tag.name} className="tag">{tag.name}</span>)
            }
          </div>
          <p className="note-content">{note.desc}</p>
        </li>
      )
    })
    return (
      <div className="view">
        <div className="sign">
          <p className="content">sdlksdlkdjlasdjlasd ladjlaskdjlkasdjlasd  djlksdjalskdjlsakdla d als daslkdasldfghequoihjdqwoe </p>
        </div>
        <div className="notes">
          {noteList}
        </div>
      </div>
    )
  }
}
