import connection from "./database.js";
const CategoryResolver={
    Query:{
        categories:async () => {
                const [rows] = await connection.query('SELECT * FROM categorymaster');
                return rows;
        },
        category:async (_, { CategoryId }) => {
            const [rows] = await connection.query('SELECT * FROM categorymaster WHERE CategoryId = ?', [CategoryId]);
            return rows[0];
        }

    }

}
export default CategoryResolver