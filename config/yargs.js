const argv = require("yargs")
    .command("listar", "imprime en sonsola la tabla de multiplicar", {
        base: {
            demand: true,
            alias: "b",
        },
        limite: {
            alias: "l",
            default: 10,
        },
    })
    .help().argv;

module.exports = {
    argv,
};