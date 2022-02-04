const core = require('@actions/core');
const exec = require('@actions/exec');

export async function run() {
    try {
        await exec.exec('yarn install');
        await exec.exec('! git diff --name-only | grep yarn.lock');
    } catch (err) {
        core.setFailed(`The file yarn.lock was modified during the installation`);
    }
}

run();

