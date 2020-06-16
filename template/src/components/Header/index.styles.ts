/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import scssStyles from './index.module.scss';
import { makeStyles } from '@material-ui/core/styles';

export const scss = scssStyles;

export const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        }
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    grow: {
        flexGrow: 1
    },
    link: {
        cursor: 'pointer',
        marginRight: theme.spacing(2)
    },
    toolbar: {
        flexWrap: 'wrap'
    },
    toolbarTitle: {
        flexGrow: 1
    }
}));
