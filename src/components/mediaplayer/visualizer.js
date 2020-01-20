import React, { Component } from 'react'
import ReactMediaVisualizer from 'react-media-visualizer'
import Main from '../main'


class Visualizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlist: [],
      playlistIsPlaying: false,
      currentSongIndex: 0,
      theme: 'soundcloud'
    }
    this.receiveStateUpdates = this.receiveStateUpdates(this)
  }

  render() {
    return (
        <div>
        <ReactMediaVisualizer
          playlist={this.state.playlist}
          receiveStateUpdates={this.receiveStateUpdates}
          playlistIsPlaying={this.state.playlistIsPlaying}
          theme={this.state.theme}
          currentSongIndex={this.state.currentSongIndex} />
      </div>
    )
    }
}

export default Visualizer