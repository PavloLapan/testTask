import React, {useState, useRef, useEffect, useCallback} from 'react';
import './menu.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

interface MenuProps {
    propTitles: string[];
}

export const Menu: React.FC<MenuProps> = ({propTitles}) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [activeTitles, setActiveTitles] = useState<string[]>([])
    const [titles, setTitles] = useState<string[]>(propTitles)
    const menuRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (!menuRef.current) return;

        const menuWidth = menuRef.current.clientWidth;
        const itemsWidth = menuRef.current.scrollWidth;
        const scrollPosition = menuRef.current.scrollLeft;
        setShowLeftArrow(scrollPosition > 0);
        setShowRightArrow(menuWidth + scrollPosition < itemsWidth);
    }, []);

    const showAll = () => {
        setActiveTitles([])
        setTitles(propTitles)
    }

    const handleTitles = (title: string, deleteTitle: boolean) => {
        if (deleteTitle) {
            // check if title already exists in titles array
            if (!titles.includes(title)) {
                setTitles([...titles, title]);
            }
            setActiveTitles(activeTitles.filter(currentTitle => currentTitle !== title));
        } else {
            // check if title already exists in activeTitles array
            if (!activeTitles.includes(title)) {
                setActiveTitles([...activeTitles, title]);
            }
            setTitles(titles.filter(currentTitle => currentTitle !== title));
        }
    };

    const handleArrowClick = useCallback((direction: 'left' | 'right') => {
        if (!menuRef.current) return;

        const offset = direction === 'left' ? -menuRef.current.clientWidth : menuRef.current.clientWidth;
        menuRef.current.scrollBy({
            left: offset,
            behavior: 'smooth',
        });
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('resize', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="menu-container">

            <div className="menu-item-all" onClick={showAll}>
                All
                <span className='border-r-1'></span>
            </div>

            {activeTitles.length > 0 &&
                <>
                    <div className={`active-menu`}>

                        {activeTitles.map((title, index) => (
                            <div key={index} className="menu-item" onClick={() => handleTitles(title, true)}>
                                {title}
                            </div>
                        ))}

                    </div>
                    {titles.length !== 0 && (<span className='border-r-1'></span>)}
                </>
            }

            {showLeftArrow && (
                <div className="left-arrow" onClick={() => handleArrowClick('left')}>
                    <FontAwesomeIcon className='arrow' icon={faChevronLeft}/>
                </div>

            )}

            {
                titles.length > 0 && (
                    <div className="menu" onScroll={handleScroll} ref={menuRef}>

                        {titles.map((title, index) => (
                            <div key={index} className="menu-item" onClick={() => handleTitles(title, false)}>
                                {title}
                            </div>
                        ))}
                    </div>
                )
            }

            {showRightArrow && titles.length > 0 && (
                <div className="arrow right-arrow" onClick={() => handleArrowClick('right')}>

                    <FontAwesomeIcon className='arrow' icon={faChevronRight}/>
                </div>
            )}
        </div>
    );
};




