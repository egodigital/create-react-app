/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import scssStyles from './index.module.scss';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(1)
    }
}));

export const scss = scssStyles;
