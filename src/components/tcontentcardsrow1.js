import React from 'react'
//import { TaggedContentCard } from 'react-ui-cards'
import cardStyles from '../css/cardstyles.module.css';
import Chemtrails from '../images/song-art/Chemtrails.jpg'
import Burn from '../images/song-art/The-Tower-BURN.jpg'
import Feedthepeople from '../images/song-art/album-cover-2500x1364-FEEDTHEPEOPLE.jpg'
import Another from '../images/song-art/The-Wait-ANOTHERTHING.jpg'
import Hate from '../images/song-art/the-oracle-HATE.jpg'








class TContentCards01 extends React.Component {
    render() {
        let {
          href,
          thumbnail,
          title,
          description,
          tags,
          ...other
        } = this.props;
        return (
        <div className={cardStyles.taggedcontentcard}>
            
            {/**<TaggedContentCard
                href=''
                thumbnail={'Chemtrails'}
                title='ChemTrails'
                description=''description
                tags={[
                    'song',
                    'new',
                    'tag'
                ]}
                />
            <TaggedContentCard
                href=''
                thumbnail={Feedthepeople}
                title='Feed The People'
                description='description'
                tags={[
                    'song',
                    'new',
                    'tag'
                    ]}
                />
            <TaggedContentCard
                href=''
                thumbnail={Burn}
                title='Burn'
                description='description'
                tags={[
                    'song',
                    'new',
                    'tag'
                ]}
            />
            <TaggedContentCard
                href=''
                thumbnail={Another}
                title='Another Thing'
                description='description'
                tags={[
                    'song',
                    'new',
                    'tag'
                ]}
            />
            <TaggedContentCard
                href=''
                thumbnail={Hate}
                title='Hate'
                description='description'
                tags={[
                    'song',
                    'new',
                    'tag'
                ]}
            />**/}
      </div>
   );
}
}
export default TContentCards01