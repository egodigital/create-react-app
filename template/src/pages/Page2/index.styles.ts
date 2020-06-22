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

export const useStyles = makeStyles(theme => {
    return {
        pageTitle: {
            marginBottom: theme.spacing(2),
            textAlign: 'center'
        }
    };
});
