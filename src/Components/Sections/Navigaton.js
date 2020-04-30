import React,{Component} from 'react';
import '../../Css/Sections/Navigation.css';
import {NavLink} from 'react-router-dom';
import menu from '../../Images/menu.svg';
import home from '../../Images/home.svg';
import search from '../../Images/search.svg';
import chat from '../../Images/chat.svg';
import friends from '../../Images/friends.svg';

const Navigation = ({closeSubNavigation}) => {
        return(
            <div className="navigation d-none d-lg-block">
                <div className="logo"></div>
                <div className="blocks" id="expander" onClick={closeSubNavigation} ><img src={menu} className="icons"/></div>
                <div className="blocks"><NavLink className="NavLinks" to="/dashboard"><img src={home} className="icons"/></NavLink></div>
                <div className="blocks"><NavLink className="NavLinks" to="/dashboard/search"><img src={search} className="icons"/></NavLink></div>
                <div className="blocks"><NavLink className="NavLinks" to="/dashboard/messages"><img src={chat} className="icons"/></NavLink></div>
                <div className="blocks"><NavLink className="NavLinks" to="/dashboard/friends"><img src={friends} className="icons"/></NavLink></div>
            </div>
        )
    }

export default Navigation;