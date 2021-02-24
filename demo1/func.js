module.exports = function (args) {
    return args.reduce((total, value) => total + value, 0);
}