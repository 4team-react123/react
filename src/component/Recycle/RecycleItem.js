import React, { useState } from 'react';
import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function RecycleItem({ menu }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(prevState => !prevState);
    }

    return (
        <div className={itemStyle.subDiv}>
            <div className={itemStyle.sudContent}>
                <div className={itemStyle.sub}>
                    <div className={itemStyle.MenuItem}>
                        <img src={menu.detail.image} />
                        <h3> {menu.menuName}</h3>
                        <p> {menu.detail.description}</p>
                        <button onClick={toggleFavorite}>
                            {isFavorite ? <FontAwesomeIcon icon={faStar} color="gold" /> : <FontAwesomeIcon icon={farStar} color="gray" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecycleItem;