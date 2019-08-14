import React from 'react';

import Auxi from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

const layout = (props) => (
    <Auxi>
        <Toolbar />
        <SideDrawer />
        <main className={styles.Content}>
            {props.children}
        </main>

    </Auxi>
);

export default layout;