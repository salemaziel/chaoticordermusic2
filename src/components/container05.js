import React from 'react'
import container05Styles from '../css/container05.module.css'
//import { TaggedContentCard } from 'react-ui-cards'
import Albumcover from '../images/album-cover.jpg'
//import TContentCards from './tcontentcardsrow1'
import ResponsivePlayer from './responsiveplayer01'



class Container05 extends React.Component {
    render() {
      return (
        <div id="container05" className="container default full screen">
        <div className={container05Styles.inner}>
          <ul id="icons02" className={container05Styles.icons}>
            <li>
              <a className={container05Styles.n01} href="https://domain.ext/path">
                <svg>
                  <use xlinkHref="#icon-905" />
                </svg>
                <span className={container05Styles.label}>Twitter</span>
              </a>
            </li>
            <li>
              <a className={container05Styles.n02} href="https://domain.ext/path">
                <svg>
                  <use xlinkHref="#icon-906" />
                </svg>
                <span className={container05Styles.label}>Facebook</span>
              </a>
            </li>
            <li>
              <a className={container05Styles.n03} href="https://domain.ext/path">
                <svg>
                  <use xlinkHref="#icon-910" />
                </svg>
                <span className={container05Styles.label}>Instagram</span>
              </a>
            </li>
            <li>
              <a className={container05Styles.n04} href="https://domain.ext/path">
                <svg>
                  <use xlinkHref="#icon-956" />
                </svg>
                <span className={container05Styles.label}>Product Hunt</span>
              </a>
            </li>
          </ul>
         
        </div>
      </div>
      )
    }
}

export default Container05