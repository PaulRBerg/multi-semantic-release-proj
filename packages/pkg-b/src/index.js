const { constants } = require("@prbpad/pkg-a");
const { table } = require("table");

const { A0, B0, C0 } = constants;
let config, data, output;

const computeConsoleTableV2 = () => {
    // prettier-ignore
    data = [
        [A0, B0, C0],
        ["A1", "B1", "C1"],
        ["A2", "B2", "C2"]
    ];

    config = {
        columns: {
            0: {
                alignment: "left",
                minWidth: 10,
            },
            1: {
                alignment: "center",
                minWidth: 10,
            },
            2: {
                alignment: "right",
                minWidth: 10,
            },
        },
    };
    output = table(data, config);
    return output;
};

module.exports = {
    computeConsoleTableV2,
};
