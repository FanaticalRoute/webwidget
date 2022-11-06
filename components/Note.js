import Image from 'next/image'
import css from '../styles/note.module.css'
import React, { useState, useEffect } from 'react'

export default function Note() {

  return (
    <div className={css.notecontainer}>

      <div id="notesInput" class={css.notesInput}>
        <input id="titleInput" value="Title " autofocus />
        <textarea id='noteInput'>Note</textarea>
        <button id='btnDone'>Done</button>
      </div>

      <div id='display' class={css.notesOutput}>
          <h1 class={css.h1text}>Your notes</h1>
          <button id='btnAdd'>Add To Notes</button>
        <div class={css.noteDisplayDiv}>
        </div>

      </div>

    </div>
    
  )
}
