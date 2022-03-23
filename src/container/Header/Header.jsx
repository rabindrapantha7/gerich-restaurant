import React from 'react'

import SubHeading from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'

import './Header.css'

const Header = () => (
    <div className="app__header app__wrapper section__padding">
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavor" />
            <h1 className="app__header-h1">The Key to Find Dining</h1>
            <p className="p__opensans" style={{ margin: '2rem 0' }}>
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum
                volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
                aliquam amet tellus.
            </p>
            <button className="custom__button" type="button">Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
            <img src={images.welcome} alt="Welcome image" />
        </div>
    </div>
)

export default Header
