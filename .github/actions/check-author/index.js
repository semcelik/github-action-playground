const core = require('@actions/core');
const github = require('@actions/github');


try {
    console.log("GITHUB: ", JSON.stringify(github))
} catch (e){
    core.setFailed("An error occurred: " + e.message)
}