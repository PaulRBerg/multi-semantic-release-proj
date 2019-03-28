/* global describe, it */
const { expect } = require("chai");

const { computeConsoleTable } = require("../src");

describe("computeConsoleTable", () => {
    it("... should correctly compute the console table", () => {
        const output = computeConsoleTable();
        expect(typeof output).to.equal("string");
    });
});
