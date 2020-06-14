/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import scssStyles from './Page1.module.scss';
import { makeStyles } from '@material-ui/core/styles';

export const scss = scssStyles;

export const useStyles = makeStyles(theme => ({
    pageTitle: {
        textAlign: 'center'
    }
}));
