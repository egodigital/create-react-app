/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

import de from './de';
import en from './en';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { IS_DEV } from '../constants';

/**
 * Language strings.
 */
export interface ILanguageStrings {
    header: {
        open_ego_digital: string;
        open_github: string;
    };
    page1: {
        short_title: string;
        title: string;
    };
    page2: {
        short_title: string;
        title: string;
    };
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: IS_DEV,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        // special options for react-i18next
        // learn more: https://react.i18next.com/components/i18next-instance
        react: {
            wait: true,
        },

        resources: {
            de: {
                translation: de
            },
            en: {
                translation: en
            }
        }
    });

/**
 * The global i18next instance.
 */
export default i18n;
