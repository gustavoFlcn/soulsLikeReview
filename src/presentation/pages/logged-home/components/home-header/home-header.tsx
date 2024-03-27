import React, { Fragment } from 'react';
import './home-header.css'
import { Item } from '../item/item';

export const HomeHeader = () => {
    return (
        <Fragment>
            <div className="header-container">
                <div className="item-holder">
                    <Item/>
                    <Item/>
                </div>
            </div>

        </Fragment>
    );
};