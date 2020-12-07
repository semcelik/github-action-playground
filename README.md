# github-action-playground

this project contains some github action workflows as a playground for myself

## workflow samples

### [bump-and-release](https://github.com/semcelik/github-action-playground/blob/master/.github/workflows/bump-and-release.yml)

(on push master)

- Bumps version if merged pull request's commit message contains **PATCH**, **MINOR**, **MAJOR** prefix
- Creates a tag due if version is bumped
- Creates a release if new tag is generated

Notes: It uses Github's [Personal Access Token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) due to trigger **publish-to-npm** workflow. [Here](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#triggering-new-workflows-using-a-personal-access-token) is why 

### [publish-to-npm](https://github.com/semcelik/github-action-playground/blob/master/.github/workflows/publish-to-npm.yml)
(on create new release)

- Install dependencies (uses @actions/cache to restore it from previous run)
- Create build and publishes to NPM

Notes: It uses [NPM_AUTH_TOKEN](https://docs.npmjs.com/about-access-tokens) due to publish without login