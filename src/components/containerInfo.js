import React from 'react'
import containercontactStyles from '../css/containerInfo.module.css'
//import { TaggedContentCard } from 'react-ui-cards'
import Albumcover from '../images/album-cover.jpg'
//import TContentCards from './tcontentcardsrow1'
import ResponsivePlayer from './responsiveplayer01'



class ContainerInfo extends React.Component {
    render() {
      return (
        
        <div id="containerInfo" className="container default full screen">
          <div className={containercontactStyles.inner}>
            <h2 id="text09" className={containercontactStyles.style1}>For More Info</h2>
            {/**<hr id="divider04" />**/}
            <p id="text08" className={containercontactStyles.style2}>Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
            <ul id="buttons01" className="style1 buttons">
              <li>
                <a href="#" className="button n01">
                  <svg>
                    <use xlinkHref="#icon-a3b" />
                  </svg>
                  <span className={containercontactStyles.label}>Continue</span>
                </a>
              </li>
            </ul>
            <p id="text12" className={containercontactStyles.style5}>© Chaotic Order Music. All rights reserved.</p>
          </div>
        </div>
      
      )
    }
}

export default ContainerInfo