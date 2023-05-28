const requestIngredients = async (id) => {
    const pg = require("pg");
    const client = new pg.Pool({
        user: "postgres",
        host: "localhost",
        database: "recipeguru",
        password: "lol",
        port: 5432,
    });

    await client.connect();
    const res = await client.query("SELECT * FROM ingredients WHERE id=$1", [
        id,
    ]);

    return res;
};
function app() {
    const res = requestIngredients();
    console.log(res);
}
