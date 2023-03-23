import * as React from 'react';
import Chevron from 'react-chevron'
import './block.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

export const Block = ({props}: any) => {
    const {blockTitle, readLength, tags, userImg, userName, userTitle} = props

    //ts-ignore
    const setActiveTag = (tagTitle: string) => {
       // setActiveTitles(tagTitle)
    }

    return (
        <div className='block'>
            <div className='block-image' style={{background: userImg}}>

            </div>

            <div className='block-content'>
                <div className='tags'>
                    {
                        tags.map((tag: {
                            className: string;
                            title: string
                        }) => (<span onClick={() => setActiveTag(tag.title)} className={`block-tag ${tag.className}`}>{tag.title}</span>))
                    }
                    <span className='read-more'>{readLength} read</span>
                </div>

                <p className='block-title'>{blockTitle}</p>

                <div className='user-block d-flex'>
                    <p className='user-image' style={{background: userImg}}></p>
                    <div>
                        <p className='user-name-block'>{userName}</p>
                        <p className='user-title-block'>{userTitle}</p>
                    </div>
                </div>

                <p className='block-read-story'>Read Story  <FontAwesomeIcon className='block-read-story-arrow' icon={faChevronRight}/></p>
            </div>
        </div>
    )

}