import React from 'react'
import '../css/main.css'
import Releases from './releases'
import Container01 from '../components/container01'
import Container02 from '../components/container02'
import Container03 from '../components/container03'
import Container04 from '../components/container04'
import Container05 from '../components/container05'
import ContainerInfo from '../components/containerInfo'
//import { TaggedContentCard } from 'react-ui-cards'
import Logo from '../images/logo-white-huge.png'
import Albumcover from '../images/album-cover.jpg'

//const Main = () => (

class Main extends React.Component {
  render() {
    return (
      <div className="main">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <section id="home-section">
             <div id="containerHeader" className="container default full screen">
             <img className='albumpromo' src={Albumcover} alt='' mode='fit' width={800} heigh={800} />
                <div className="inner">
                  {/**<h1 id="text03" className="style3">Chaotic Order</h1>**/}
                  <img className='' src={Logo} alt='' mode='fit' />
                    <p id="text04" className="style4">New Album FEED THE PEOPLE Out Now!</p>
                {/**<hr id="divider06" />**/}
                </div>
              </div>
        <Container01 />
        
        <Container02 />
        <Container03 />
        {/*<Container04 />*/}
        {/*<Container05 />*/}
      </section>
      <section id="done-section">
        {/*<ContainerInfo />*/}
        <Container04 />
      </section>
    </div>
  </div>
</div>
</div>
    )
}
}
export default Main
