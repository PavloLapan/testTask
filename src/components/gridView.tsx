import React, {useEffect, useMemo, useState} from "react";

import OwlCarousel from 'react-owl-carousel';
import {Block} from  './block'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const GridView = () => {
    const blocks = useMemo(() => [
        {
            blockTitle: 'How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions',
            readLength: '7 min',
            userImg: 'blue',
            userName: 'Name',
            userTitle: 'Title',
            tags: [{title:'SMB', className: 'green'},{title:'Information Technology', className: 'turquoise'}]
        },
        {
            blockTitle: 'How Ridgeline Discovery Reduced Invoice Processing Time by 90% in a Month',
            readLength: '7 min',
            userImg: 'blue',
            userName: 'Name',
            userTitle: 'Title',
            tags: [{title: 'SMB', className: 'green'}, {className: 'green', title: 'deepBlue' }]
        },
        {
            blockTitle: 'How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions',
            readLength: '7 min',
            userImg: 'blue',
            userName: 'Name',
            userTitle: 'Title',
            tags: [{title: 'SMB'}, {title: 'Enterprise', className: 'deepBlue'}]
        },
        {
            blockTitle: 'How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions',
            readLength: '7 min',
            userImg: 'blue',
            userName: 'Name',
            userTitle: 'Title',
            tags: [{title: 'Enterprise', className: 'green'}]
        },
        {
            blockTitle: 'How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions',
            readLength: '7 min',
            userImg: 'blue',
            userName: 'Name',
            userTitle: 'Title',
            tags: [{title: 'Insurance, Textile Testing & Certification', className: 'deepBlue'}]
        },
        {
            blockTitle: 'How Serial 1 Built a Procurement Ecosystem with Precoro’s Core Modules and Extensions',
            readLength: '7 min',
            userImg: 'blue',
            userName: 'Name',
            userTitle: 'Title',
            tags: [{title: 'SMB'}, {title: 'Enterprise', className: 'green'}]
        }


    ], [])

    return (
        <OwlCarousel  className="owl-theme"  margin={10}   responsive={{
            0: {
                items: 1
            },
            700: {
                items: 2
            }
        }}>
            {blocks.map((block,  index) => {
                return (
                   <Block props={block}/>
                );
            })}
        </OwlCarousel>
    )
}