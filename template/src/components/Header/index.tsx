/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import GitHubIcon from '@material-ui/icons/GitHub';
import Logo from '../../assets/egodigital-logo.png';
import React, { PropsWithChildren } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { scss, useStyles } from './index.styles';

export interface IHeaderProps {
}

/**
 * Props for <Header /> component.
 */
export type HeaderProps = IHeaderProps & RouteChildrenProps;

const Header = (props: PropsWithChildren<HeaderProps>) => {
    const classes = useStyles();

    const { t } = useTranslation();

    return (
        <div className={scss['Header']}>
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
                            className={scss['logo']}
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

/**
 * The header component.
 */
export default withRouter(Header);
