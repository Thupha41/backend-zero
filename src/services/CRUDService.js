const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * FROM Persons p ");
  return results;
};
const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Persons p WHERE PersonID = ?",
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
module.exports = {
  getAllUsers,
  getUserById,
};
