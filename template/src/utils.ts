/**
 * Created by React Web Creator
 *
 * by e.GO Digital GmbH, Aachen, Germany
 *
 * https://e-go-digital.com
 */

/**
 * Clones an object / value.
 *
 * @param {T} obj The input object / value.
 * 
 * @returns {T} The cloned object / value.
 */
export function cloneObj<T extends any = any>(obj: T): T {
    if (!obj) {
        return obj;
    }

    return JSON.parse(
        JSON.stringify(obj)
    );
}
