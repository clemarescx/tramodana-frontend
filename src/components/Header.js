import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//Material Design
import { Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarMenuIcon, ToolbarIcon } from 'rmwc/Toolbar';
import { Icon } from 'rmwc/Icon';


const Header = (props) => (
    <Toolbar waterfall
    className="header header-toolbar">
        <ToolbarRow>

            <ToolbarSection alignStart>
            <ToolbarTitle 
                className="header-icon pointer" 
                onClick={props.toggleMenu}
            >
                <NavLink className="navbar-brand" exact to="/dashboard">TR</NavLink>
            </ToolbarTitle>
            </ToolbarSection>   

            <ToolbarSection alignEnd>
                <ToolbarTitle 
                className="header-option pointer"
                >
                    <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                </ToolbarTitle>

                <ToolbarTitle 
                className="header-option pointer"
                >
                    <NavLink className="nav-link" to="/support">SUPPORT</NavLink>
                </ToolbarTitle>

                <ToolbarTitle 
                className="header-option pointer"
                >
                    <NavLink className="nav-link" to="/team">TEAM</NavLink>
                </ToolbarTitle>
            </ToolbarSection>

        </ToolbarRow>
    </Toolbar>
);

export default Header;


