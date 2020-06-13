/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import GitHubIcon from '@material-ui/icons/GitHub';

import styles from './Header.module.scss';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../assets/egodigital-logo.png';

interface IHeaderProps {
}

export const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));

const Header: React.FC<IHeaderProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={styles['Header']}>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        <img
                            onClick={() => window.open('https://e-go-digital.com', '_blank')}
                            className={styles['logo']}
                            src={Logo}
                            alt="e.GO Digital logo"
                            title={'Visit e.GO Digital ...'} />
                    </Typography>

                    <div className={classes.grow} />
                    <div>
                        <IconButton
                            title={'Open GitHub ...'}
                            color="inherit"
                            onClick={() => window.open('https://github.com/egodigital/create-react-app', '_blank')}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
