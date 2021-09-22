import React from 'react';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import DayCards from '../DayCards/DayCards';

export default function MainView() {
  return (
    <div className='flex flex-column ba bw1 tc bg-light-gray pa3 ph5-ns mt5'>
      <button className="self-end f6 link dim ph3 pv2 mb2 dib white bg-hot-pink">add to favorites</button>
      <CurrentLocation className=""/>
      <div className="f1">SCATTERED CLOUDS</div>
      <DayCards />
    </div>
  )
}
