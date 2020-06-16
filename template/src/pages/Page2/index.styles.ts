/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import scssStyles from './index.module.scss';
import { withStyles as withMUIStyles } from '@material-ui/core/styles';

export const scss = scssStyles;

export const withStyles = withMUIStyles(theme => {
    return {
        pageTitle: {
            marginBottom: theme.spacing(2),
            textAlign: 'center'
        }
    };
});
