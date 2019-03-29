const multirelease = require("./packages/monorepo-scripts/publish/multiSemanticRelease");

// prettier-ignore
multirelease([
    `${__dirname}/packages/pkg-a/package.json`,
    `${__dirname}/packages/pkg-b/package.json`,
    `${__dirname}/packages/pkg-c/package.json`,
]);
