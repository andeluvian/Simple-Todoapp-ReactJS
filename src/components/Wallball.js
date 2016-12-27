
import React, { Component } from 'react';

//import { Link } from 'react-router'





class Wallball extends Component {


  render() {


    return (
      <div>
        <div >
          <canvas class="emscripten" id="canvas" oncontextmenu="event.preventDefault()" height="600px" width="960px"></canvas>

          <div class="logo"></div>
          <div class="fullscreen"><img src="TemplateData/fullscreen.png" width="38" height="38" alt="Fullscreen" title="Fullscreen" onclick="SetFullscreen(1);" /></div>
          <div class="title">Turn!</div>

        </div>


    </div>

    );
  }
}

export default Wallball;
