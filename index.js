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

const chalk = require('chalk');
const ejs = require('ejs');
const fs = require('fs-extra');
const minimist = require('minimist');
const path = require('path');
const sanitizeFilename = require('sanitize-filename');
const _help = require('./help');
const _util = require('./util');


const args = minimist(process.argv.slice(2));
const confirm = _util.confirm;
const current_dir = process.cwd();
const packageJSON = JSON.parse(
    fs.readFileSync(__dirname + '/package.json', 'utf8')
);
const spawn = _util.spawn;
const start = new Date();
const template_dir = path.resolve(current_dir, 'template');
const withSpinner = _util.withSpinner;
const writeLine = _util.writeLine;


(async () => {
    writeLine(`${packageJSON.displayName} - Version ${packageJSON.version}`);
    writeLine(`Copyright (c) ${start.getFullYear()}-present ${'e.GO' + chalk.reset(' Digital GmbH <') + chalk.white('https://e-go-digital.com') + chalk.reset('>')}`);
    writeLine(`${chalk.reset('')}`);

    if (!args['_'].length) {
        _help.showHelp();
    }

    const app_name = args['_'][0].trim();
    const git_init = args['g'] || args['git-init'];
    const open_vscode = args['v'] || args['vscode'];
    const force = args['f'] || args['force'];

    if (app_name === '') {
        // not app name
        _help.showHelp();
    }

    const out_dir = path.resolve(current_dir, sanitizeFilename(app_name));

    // check, if out_dir already exists
    await withSpinner(`Check if directory '${path.basename(app_name)}' exists ...`, async (spinner) => {
        if (fs.existsSync(out_dir)) {
            const stat = await fs.stat(out_dir);

            if (stat.isDirectory() && force) {
                spinner.text = `Removing existing directory '${path.basename(app_name)}' ...`;

                await fs.remove(out_dir);
            } else {
                spinner.warn(`Directory or file '${path.basename(app_name)}' already exists!`);

                process.exit(3);
            }
        }

        await fs.mkdirs(out_dir);
        spinner.succeed(`Directory '${path.basename(app_name)}' created`);
    });

    // copy templates
    await withSpinner('Copy template files ...', async (spinner) => {
        await fs.copy(template_dir, out_dir, {
            overwrite: false,
            recursive: true
        });

        spinner.succeed('Template files copied');
    });

    // update package.json
    await withSpinner(`Update 'package.json' ...`, async (spinner) => {
        const out_file = path.resolve(out_dir, 'package.json');

        const projectsPackageJSON = JSON.parse(
            await fs.readFile(out_file, 'utf8')
        );

        projectsPackageJSON.name = app_name;

        await fs.writeFile(
            out_file,
            JSON.stringify(projectsPackageJSON, null, 4),
            'utf8'
        );

        spinner.succeed("'package.json' updated");
    });

    // update index.html
    await withSpinner(`Update 'index.html' ...`, async (spinner) => {
        const out_file = path.resolve(out_dir, 'public/index.html');

        const parsedIndexHtml = ejs.render(
            await fs.readFile(out_file, 'utf8'),
            {
                app_name
            }
        );

        await fs.writeFile(out_file, parsedIndexHtml, 'utf8');

        spinner.succeed("'index.html' updated");
    });

    // execute NPM commands
    await withSpinner("Execute 'npm' commands ...", async (spinner) => {
        spinner.text = "Execute 'npm install' ...";
        await spawn('npm', out_dir, ['install']);

        spinner.text = "Execute 'npm update' ...";
        await spawn('npm', out_dir, ['update']);

        spinner.text = "Execute 'npm audit fix' ...";
        await spawn('npm', out_dir, ['audit', 'fix']);

        spinner.succeed("All 'npm' commands executed");
    });

    // init Git repository?
    if (git_init || await confirm('Init Git repository?', true)) {
        await withSpinner('Initialize Git repository ...', async (spinner) => {
            await spawn('git', out_dir, ['init']);

            spinner.text = 'Add untracked files ...';
            await spawn('git', out_dir, ['add', '-A']);

            spinner.text = 'Create initial commit ...';
            await spawn('git', out_dir, ['commit', '-m', 'initial commit']);

            spinner.succeed('Git repository initialized');
        });
    }

    // open Visual Studio Code?
    if (open_vscode || await confirm('Open Visual Studio Code?', true)) {
        await withSpinner('Open Visual Studio Code ...', async (spinner) => {
            await spawn('code', out_dir, ['.']);
    
            spinner.succeed('Visual Studio Code opened');
        });
    }
})();