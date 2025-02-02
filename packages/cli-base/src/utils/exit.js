// exports.exitProcess = !process.env.VUE_CLI_API_MODE && !process.env.VUE_CLI_TEST

module.exports = function exit(code) {
    if (exports.exitProcess) {
        process.exit(code)
    } else if (code > 0) {
        throw new Error(`Process exited with code ${code}`)
    }
}