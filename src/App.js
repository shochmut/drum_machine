import React from "react";
import "./style.css";

export default function App() {
  return (
    <div id='drum-machine'>
      <div id='display'>
      </div>
    </div>
  );
}


function DrumPad() {
  const [drum, setDrum] = useState('');
  const fetchDrum = FetchDrumPad()

  const parentToChild = () => {};
  const childToParent = (childdata) => {
    setText(childdata);
  };
  return (
    
  );
}



fetchDrumPad() {
  //simulate API fetch from server. Function to grab different DrumPad sounds based on ID attribute
  const drums = [
    {id: 'heater1', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    {id: 'heater2', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {id: 'heater3', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {id: 'heater4', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {id: 'clap', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {id: 'open-hh', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {id: 'kick-n-hat', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {id: 'kick', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {id: 'closed-hh', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'},
  ];
  setDrum({ drums });
}


