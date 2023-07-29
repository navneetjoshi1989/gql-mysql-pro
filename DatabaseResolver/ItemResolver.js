import connection from "./database.js";
const ItemResolver = {
  Query: {
    items: async () => {
      const [rows] = await connection.query("SELECT * FROM itemmaster");
      return rows;
    },
    item: async (_, { ItemId }) => {
      const [rows] = await connection.query(
        "SELECT * FROM itemmaster WHERE ItemId = ?",
        [ItemId]
      );
      return rows[0];
    },
  },
};

export default ItemResolver;
