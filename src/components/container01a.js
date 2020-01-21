import React from 'react'
import container01Styles from '../css/container01.module.css'
//import '../css/main.css'
import ResponsivePlayer01 from './responsiveplayer01'
import TContentCards01 from './tcontentcardsrow1'
import TContentCards02 from './tcontentcardsrow2'
//import Mediaplayer01 from './mediaplayer/media01'

//import ReactWebMediaPlayer from 'react-web-media-player';
import Chemtrails from '../images/song-art/Chemtrails.jpg'
import Chemtrailsmp3 from '../audio/1-Chemtrails.mp3'
import Logowhite from '../images/logo-white.png'

import Visualizer from './visualizer'

class Container01a extends React.Component {
    render() {
      return (
      <div id="container01" className="container columns full screen" data-scroll-id="one" data-scroll-behavior="center"  /*className={container01Styles.columns} className={container01Styles.full} className={container01Styles.full.screen}*/>
          <div className={container01Styles.inner}> 
            {/*<div className={container01Styles.afterSpacer}>*/}
                
              <h2 id="text01" className={container01Styles.style1}>Feed The People</h2>
              {/**<hr id="divider03" />**/}
              {/*<p id="text02" className={container01Styles.style2}>Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. </p>*/}
              <row style={{
                  display: 'flex',
              }}>
              <container>
              <Visualizer />
            {/*</div>*/}
            
              
                  <h1>Test</h1>
              </container>
            </row>
              <br />
              <hr />
          </div>
        </div>
      )
    }
}

export default Container01a