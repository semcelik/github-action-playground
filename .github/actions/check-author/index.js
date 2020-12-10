const core = require('@actions/core');
const github = require('@actions/github');


try {
    const emailSuffix = core.getInput('email_suffix');

    const {commits} = github.context.payload

    const commitEmails = commits.map(c => c.author.email)
    console.log('Email prefix pattern: ', emailSuffix)
    console.log(`Emails to check: ${commitEmails.join(',')}`)



    const invalidEmails = commitEmails.filter(email => !email.endsWith(emailSuffix))

    if (invalidEmails.length === 0) {
        return console.log('Author email is valid')
    }
    const errorMessage = `Author email is invalid. Found: ${invalidEmails.join(',')} it should be MAIL_PREFIX@${emailSuffix}`
    throw Error(errorMessage)

} catch (e) {
    core.setFailed("An error occurred: " + e.message)
}