import connection from './database.js'

const UserResolver={
    Query:{
        users: async () => {
            const [rows] = await connection.query('SELECT * FROM usermaster');
            return rows;
          },
          user: async (_, { UserId }) => {
            const [rows] = await connection.query('SELECT * FROM usermaster WHERE UserId = ?', [UserId]);
            return rows[0];
          },
    },
    User: {    
      Shop: async (usr) =>{ 
        const [rows]= await connection.query("SELECT * FROM mastershop where ShopId = ?",[usr.ShopId]);
        return rows;//singlerow
      }
    },

}

export default UserResolver;
