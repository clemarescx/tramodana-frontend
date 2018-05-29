import React from 'react';

//Material Design
import { Drawer, DrawerHeader, DrawerContent } from 'rmwc/Drawer';

const Menu = (props) =>(
    <Drawer 
    temporary
    open={props.menuIsOpen}
    onClose={props.handleMenuClose}
    >
        <DrawerContent
        className="menu-background"
        >
            <DrawerHeader className="menu-header-text align-items-center px-0 no-gutters">
                <h2 className="menu-h2 px-0 align-self-center"></h2>
            </DrawerHeader>            
        </DrawerContent>
    </Drawer>
);

export default Menu;