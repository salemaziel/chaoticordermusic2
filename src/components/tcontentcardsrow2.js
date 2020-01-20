import React from 'react'
//import { TaggedContentCard } from 'react-ui-cards'
import cardStyles from '../css/cardstyles.module.css';
import Sorry from '../images/song-art/closeyoureyestosee-SORRY.jpg'
import Chains from '../images/song-art/medicineman-CHAINS.jpg'
import Angel from '../images/song-art/shaman-ANGEL.jpg'
import Never from '../images/song-art/The-Magician-NEVEREND.jpg'
import Earth from '../images/song-art/HighPriestess-EARTH.jpg'






class TContentCards02 extends React.Component {
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
                thumbnail={Sorry}
                title='Sorry'
                description='description'
                tags={[
                    'song',
                    'new',
                    'tag'
                ]}
                />
            <TaggedContentCard
                href=''
                thumbnail={Chains}
                title='Chains'
                description='description'
                tags={[
                    'song',
                    'new',
                    'tag'
                    ]}
                />
            <TaggedContentCard
                href=''
                thumbnail={Angel}
                title='Angel'
                description='description'
                tags={[
                    'song',
                    'new',
                    'tag'
                ]}
            />
            <TaggedContentCard
                href=''
                thumbnail={Never}
                title='Never End'
                description='description'
                tags={[
                    'song',
                    'new',
                    'tag'
                ]}
            />
            <TaggedContentCard
                href=''
                thumbnail={Earth}
                title='Earth'
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
export default TContentCards02