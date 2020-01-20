import React from 'react'
import container02Styles from '../css/container02.module.css'
//import { TaggedContentCard } from 'react-ui-cards'
import Albumcover from '../images/album-cover.jpg'
//import TContentCards from './tcontentcardsrow1'




class Container02 extends React.Component {
    render() {
      return (
        <div id="container02" data-scroll-id="two" data-scroll-behavior="center" className="container columns full screen">
        <div className={container02Styles.inner}>
          <div className={container02Styles.afterSpacer}>
            <h2 id="text05" className={container02Styles.style1}>Magna Feugiat</h2>
           {/*} <hr id="divider02" />*/}
            <p id="text06" className={container02Styles.style2}>Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
            {/**<TContentCards />**/}
            {/**<ul id="buttons04" className="style1 buttons">
              <li>
                <a href="#three" className="button n01">
                  <svg>
                    <use xlinkHref="#icon-a3b" />
                  </svg>
                  <span className="label">Next</span>
                </a>
              </li>
            </ul>**/}
          </div>
          <span />
        </div>
      </div>
      )
    }
}

export default Container02