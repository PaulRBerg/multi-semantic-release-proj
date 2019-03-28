// The lib has been copied from https://github.com/dhoulb/multi-semantic-release
const multirelease = require("multi-semantic-release");

multirelease([`${__dirname}/packages/pkg-a/package.json`]);
