import React, { Component } from 'react'

import ReactMediaVisualizer from 'react-media-visualizer'
import Player from './components/Player'
import Navbar from './components/Navbar'

import './css/main.css'

import Container01 from './components/container01'
import Container02 from './components/container02'
import Container03 from './components/container03'
import Container04 from './components/container04'

import Logo from './images/logo-white-huge.png'
import Albumcover from './images/album-cover.jpg'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlist: null,
      playlistIsPlaying: false,
      currentSongIndex: 0,
      theme: 'spotify'
    }
    this.updatePlaylist = this.updatePlaylist.bind(this)
    this.receiveStateUpdates = this.receiveStateUpdates.bind(this)
    this.handleThemeChange = this.handleThemeChange.bind(this)
  }

  render() {
    return (
      <React.Fragment>
        <div className="main">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
        <section id="home-section">
        <div id="containerHeader" className="container default full screen">
        
             <img className='albumpromo' src={Albumcover} alt='' mode='fit' width={500} height={500} />
                <div className="inner">
                 
                  <img className='' src={Logo} alt='' mode='fit' width={800}  />
                    <p 
                    id="text04" 
                    className="style4" 
                    style={{
                      fontWeight: '500',
                      fontVariant: 'small-caps',
                      textAlign: 'center',
                      color: '#FCAC02',
                    }}
                  > Feed The People - available now!</p>
                </div>
              </div>
        <Container01 />
        
        
        {/*<div className="react-media-vis-body">
          <Navbar />
          
          <Player
            updatePlaylist={this.updatePlaylist}
            currentSongIndex={this.state.currentSongIndex}
            playlist={this.state.playlist}
            theme={this.state.theme}
            handleThemeChange={this.handleThemeChange}
          playlistIsPlaying={this.state.playlistIsPlaying} />
        </div>
        <ReactMediaVisualizer
          style={{
            zIndex: '100',
          }}
          playlist={this.state.playlist}
          receiveStateUpdates={this.receiveStateUpdates}
          playlistIsPlaying={this.state.playlistIsPlaying}
          theme={this.state.theme}
        currentSongIndex={this.state.currentSongIndex} />*/}

        <Container02 />
        <Container03 />
        </section>
        
        <Container04 />
        </div>
        </div>
        </div>
        </div>
      </React.Fragment>
    )
  }

  updatePlaylist(playlist, currentSongIndex) {
    // New playlist received, get array containing song sources
    playlist = playlist.map(song => song.src)
    if (Number.isInteger(currentSongIndex)) {
      if (JSON.stringify(playlist) !== JSON.stringify(this.state.playlist))
        this.setState({ playlist, playlistIsPlaying: true, currentSongIndex: currentSongIndex })
      // Not new playlist, just toggling play or pause
      else this.setState({ playlistIsPlaying: !this.state.playlistIsPlaying })
      // New Song index
      if (currentSongIndex !== this.state.currentSongIndex) this.setState({ currentSongIndex })
    } else {
      if (JSON.stringify(playlist) !== JSON.stringify(this.state.playlist))
        this.setState({ playlist, playlistIsPlaying: true, currentSongIndex: 0 })
      else this.setState({ playlistIsPlaying: !this.state.playlistIsPlaying })
    }
  }

  handleThemeChange(event) {
    this.setState({theme: event.target.value})
  }

  receiveStateUpdates(payload) {
    this.setState(payload)
  }
}
