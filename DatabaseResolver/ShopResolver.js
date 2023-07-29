import connection from "./database.js";

const ShopResolver = {
  Query: {
 
    shops: async () => {
      const [rows] = await connection.query("SELECT * FROM mastershop");
      return rows;
    },
    shop: async (_, { ShopId }) => {
      const [rows] = await connection.query(
        "SELECT * FROM mastershop where ShopId = ",
        [ShopId]
      );
      return rows[0];
    },
  },
  Shop: {    
    User: async (shop) =>{ 
   const [rows]= await connection.query("SELECT * FROM usermaster WHERE  ShopId = ?",[shop.ShopId]);
   return rows;//singlerow
 }
},
};

export default ShopResolver;
