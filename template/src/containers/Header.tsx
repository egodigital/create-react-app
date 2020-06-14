/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import React from 'react';

import { AppBar, IconButton, Link, Toolbar, Typography } from '@material-ui/core';

import styles from './Header.module.scss';
import { makeStyles } from '@material-ui/core/styles';

import { RouteChildrenProps, withRouter } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';

import Logo from '../assets/egodigital-logo.png';
import { useTranslation } from 'react-i18next';

interface IHeaderProps {
}

type HeaderProps = React.PropsWithChildren<IHeaderProps> & RouteChildrenProps;

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
    link: {
        cursor: 'pointer',
        marginRight: theme.spacing(2),
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));

const Header = (props: React.PropsWithChildren<HeaderProps>) => {
    const classes = useStyles();

    const { t } = useTranslation();

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
                            title={t('header.open_ego_digital')} />
                    </Typography>

                    <div className={classes.grow} />

                    <Link
                        className={classes.link}
                        onClick={() => props.history.push('/page-1')}
                    >
                        {t('page1.short_title')}
                    </Link>
                    <Link
                        className={classes.link}
                        onClick={() => props.history.push('/page-2')}>
                        {t('page2.short_title')}
                    </Link>

                    <div>
                        <IconButton
                            title={t('header.open_github')}
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
};

export default withRouter(Header);
