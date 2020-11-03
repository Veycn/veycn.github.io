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
          <div>
            <span className="note-date">{note.date}</span>
            {
              note.tags.map((tag) => <span key={tag.name}>{tag.name}</span>)
            }
          </div>
          <p>{note.desc}</p>
        </li>
      )
    })
    return (
      <div className="view">
        <ul>
          {noteList}
        </ul>
      </div>
    )
  }
}
