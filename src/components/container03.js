import React from 'react'
import container03Styles from '../css/container03.module.css'
//import { TaggedContentCard } from 'react-ui-cards'
import Albumcover from '../images/album-cover.jpg'
//import TContentCards from './tcontentcardsrow1'
import ResponsivePlayer from './responsiveplayer01'



class Container03 extends React.Component {
    render() {
      return (
        <div id="container03" data-scroll-id="three" data-scroll-behavior="center" className="container columns full screen">
        <div className={container03Styles.inner}>
          <span />
          <div className={container03Styles.afterSpacer}>
            <h2 id="text07" className={container03Styles.style1}>Lorem Ipsum</h2>
           {/** <hr id="divider01" />**/}
            <p id="text10" className={container03Styles.style2}>Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
            {/**<ul id="buttons05" className="style1 buttons">
              <li>
                <a href="#signup" className="button n01">
                  <svg>
                    <use xlinkHref="#icon-a3b" />
                  </svg>
                  <span className="label">Next</span>
                </a>
              </li>
            </ul>**/}
            {/**<ResponsivePlayer />**/}
          </div>
        </div>
      </div>
      )
    }
}

export default Container03