const multirelease = require("multi-semantic-release");

// prettier-ignore
multirelease([
    `${__dirname}/packages/pkg-a/package.json`,
    `${__dirname}/packages/pkg-b/package.json`,
]);
