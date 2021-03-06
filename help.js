/**
 * MIT License
 *
 * Copyright (c) 2020-present, e.GO Digital GmbH, Aachen, Germany
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const _util = require('./util');


const writeLine = _util.writeLine;


exports.showHelp = async () => {
    writeLine(`${packageJSON.description}`);
    writeLine();
    
    writeLine('Syntax:    ego create react-app [APP_NAME]');
    writeLine();

    writeLine(`General options:`);
    writeLine(` -f, --force     # Remove existing output directory.`);
    writeLine(` -g, --git-init  # Initialize git repository.`);
    writeLine(` -v, --vscode    # Open Visual Studio Code.`);
    writeLine();

    writeLine('Examples:    ego create react-app my-app');
    writeLine('             ego create react-app my-cool-app -gv');
    writeLine();

    process.exit(1);
}
