import React from 'react';
import MainView from '../MainView/MainView';

export default function Home() {
  return (
    <div className=" flex justify-center black-80">
    <div className="measure">
      <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100 mt6" type="text" aria-describedby="name-desc" placeholder="enter a city"></input>
      <MainView />
    </div>
  </div>
  )
}
