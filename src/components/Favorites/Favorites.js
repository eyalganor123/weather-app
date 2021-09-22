import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons';

export default function Favorites() {
  return (
    <div>
      <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
        <FontAwesomeIcon icon={faCloud} />
          {/* <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" alt=""></img> */}
          <h1 class="f3 mb2">Tel-Aviv</h1>
          <h2 class="f5 fw4 gray mt0">36°</h2>
        </div>
      </article>
    </div>
  )
}