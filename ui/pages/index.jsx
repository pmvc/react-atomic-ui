import React from 'react'; 
import {ClientRoute} from 'reshow'; 
import {PopupPool} from 'organism-react-popup';
import {PageLoadProgressHandler} from 'organism-react-progress'; 

import Atoms from '../pages/Atoms';
import Molecules from '../pages/Molecules';
import Organisms from '../pages/Organisms';
import Icons from '../pages/Icons';
import List from '../pages/List';
import Carousel from '../pages/Carousel';
import D3 from '../pages/D3';
import Animation from '../pages/Animation';
import Popup from '../pages/Popup';
import Video from '../pages/Video';
import Parallax from '../pages/Parallax';

const themes = {
    atoms: Atoms,
    molecules: Molecules,
    organisms: Organisms,
    d3: D3,
    icons: Icons,
    list: List,
    carousel: Carousel,
    animation: Animation,
    popup: Popup,
    parallax: Parallax,
    video: Video,
};

const Index = (props) => {
    
    let {themePath, ...others} = props;

    if (!themePath) {
        themePath = 'atoms';
    }

    return (
        <div>
            <ClientRoute
                {...others}
                themes={themes}
                themePath={themePath}
            />
            <PopupPool />
            <PageLoadProgressHandler ajax={true} />
        </div>
    );
};

export default Index;
