const core = require('@actions/core');
const github = require('@actions/github');


try {
    const {commits} = github.context.payload

    const commitEmails = commits.map(c => c.author.email)

    console.log("EMAILS: ", commitEmails)

    console.log("GITHUB: ", JSON.stringify(github))
} catch (e) {
    core.setFailed("An error occurred: " + e.message)
}