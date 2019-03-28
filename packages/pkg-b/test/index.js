/* global describe, it */
const { expect } = require("chai");

const { computeConsoleTableV2 } = require("../src");

describe("computeConsoleTable", () => {
    it("... should correctly compute the console table", () => {
        const output = computeConsoleTableV2();
        expect(typeof output).to.equal("string");
    });
});
