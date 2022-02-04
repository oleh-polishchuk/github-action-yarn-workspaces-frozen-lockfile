# Yarn workspaces frozen lockfile

The action verifies that yarn.lock file was not updated after installation

This action exists because as of yarn@1.22.17, --frozen-lockfile is completely broken when combined with Yarn workspaces. See https://github.com/yarnpkg/yarn/issues/6291

## Example usage

uses: oleh-polishchuk/github-action-yarn-workspaces-frozen-lockfile@v1.0
