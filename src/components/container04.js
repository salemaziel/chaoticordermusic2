import React from 'react'
import container04Styles from '../css/container04.module.css'
//import { TaggedContentCard } from 'react-ui-cards'
import Albumcover from '../images/album-cover.jpg'
//import TContentCards from './tcontentcardsrow1'
import ResponsivePlayer from './responsiveplayer01'



class Container04 extends React.Component {
    render() {
      return (
        <div id="container04" data-scroll-id="signup" data-scroll-behavior="center" className="container columns full screen">
        <div className={container04Styles.inner}>
          <div>
            <h2 id="text11" className={container04Styles.style1}>Contact</h2>
           {/** <hr id="divider05" />**/}
            <p id="text13" className={container04Styles.style2}>Morbi semper nisl et dictum cursus. In hac habitasse platea dictumst. Aliquam blandit etiam vel massa eget mollis. Donec at quam orci. Proin et semper metus consequat etiam.</p>
          </div>
          <div>
            <form id="form02" method="post">
              <div className={container04Styles.inner}>
                <div className={container04Styles.field}>
                  <label htmlFor="form02-fname">Name</label>
                  <input type="text" name="fname" id="form02-fname" placeholder maxLength={128} required />
                </div>
                <div className={container04Styles.field}>
                  <label htmlFor="form02-email">Email</label>
                  <input type="email" name="email" id="form02-email" placeholder maxLength={128} required />
                </div>
                <div className={container04Styles.field}>
                  <input type="text" name="sms" id="form02-sms" placeholder="Sms" maxLength={128} />
                </div>
                <div className={container04Styles.actions}>
                  <button type="submit">Submit</button>
                </div>
              </div>
              <input type="hidden" name="id" defaultValue="form02" />
            </form>
          </div>
        </div>
      </div>
      )
    }
}

export default Container04