import React, { Component } from 'react';
import ReactWebMediaPlayer from 'react-web-media-player';
import Chemtrails from '../../images/song-art/Chemtrails.jpg'
import Chemtrailsmp3 from '../../audio/1-Chemtrails.mp3'
import Logowhite from '../../images/logo-white.png'


import Feed from '../../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Feedmp3 from '../../audio/2-FeedThePeople.mp3'

import Burn from '../../images/song-art/The-Tower-BURN.jpg'
import Burnmp3 from '../../audio/3-BURNIT.mp3'

import Another from '../../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Anothermp3 from '../../audio/4-AnotherThing.mp3'

import Hate from '../../images/song-art/the-oracle-HATE.jpg'
import Hatemp3 from '../../audio/5-HATEREPULSION.mp3'

import Sorry from '../../images/song-art/closeyoureyestosee-SORRY.jpg'
import Sorrymp3 from '../../audio/6-Sorry.mp3'

import Chains from '../../images/song-art/medicineman-CHAINS.jpg'
import Chainsmp3 from '../../audio/7-CHAINS.mp3'

import Angel from '../../images/song-art/shaman-ANGEL.jpg'
import Angelmp3 from '../../audio/8-ChaoticOrder.mp3'

import Never from '../../images/song-art/The-Magician-NEVEREND.jpg'
import Nevermp3 from '../../audio/9-NeverEnd.mp3'

import Earth from '../../images/song-art/HighPriestess-EARTH.jpg'
import Earthmp3 from '../../audio/10-Colors.mp3'

class Mediaplayer01 extends React.Component {
    render() {
      return (
        <div>
            <row style={{
                    display: 'flex',
                }}>
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Chemtrails"
	            thumbnail={Chemtrails}
	            audio={Chemtrailsmp3}
	            logo={{
		            img: "../../images/logo-white.png",
		            href: "#"
	                }}
            />
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Feed The People"
	            thumbnail={Feed}
	            audio={Feedmp3}
	            logo={{
		            img: "url(../../images/logo-white.png)",
		            href: "#"
	                }}
            />
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Burn"
	            thumbnail={Burn}
	            audio={Burnmp3}
	            logo={{
		            img: "url(../../images/logo-white.png)",
		            href: "#"
	                }}
            />
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Another Thing"
	            thumbnail={Another}
	            audio={Anothermp3}
	            logo={{
		            img: "url(../../images/logo-white.png)",
		            href: "#"
	                }}
            />
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Hate"
	            thumbnail={Hate}
	            audio={Hatemp3}
	            logo={{
		            img: "url(../../images/logo-white.png)",
		            href: "#"
	                }}
            />
            </row>

            <row style={{
                    display: 'flex',
                }}>
                    <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Sorry"
	            thumbnail={Sorry}
	            audio={Sorrymp3}
	            logo={{
		            img: "../../images/logo-white.png",
		            href: "#"
	                }}
            />
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Chains"
	            thumbnail={Chains}
	            audio={Chainsmp3}
	            logo={{
		            img: "url(../../images/logo-white.png)",
		            href: "#"
	                }}
            />
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Angel"
	            thumbnail={Angel}
	            audio={Angelmp3}
	            logo={{
		            img: "url(../../images/logo-white.png)",
		            href: "#"
	                }}
            />
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Never End"
	            thumbnail={Never}
	            audio={Nevermp3}
	            logo={{
		            img: "url(../../images/logo-white.png)",
		            href: "#"
	                }}
            />
            <ReactWebMediaPlayer
	            width={200} height={200}
	            title="Earth"
	            thumbnail={Earth}
	            audio={Earthmp3}
	            logo={{
		            img: "url(../../images/logo-white.png)",
		            href: "#"
	                }}
            />


                </row>


        </div>
        )
    }
}

export default Mediaplayer01