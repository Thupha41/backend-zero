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
const updateUserById = async (
  firstName,
  lastName,
  address,
  city,
  email,
  userId
) => {
  let [results, fields] = await connection.query(
    `UPDATE Persons SET FirstName = ?, LastName = ?, Address = ?, City = ?, Email = ? WHERE PersonID = ?`,
    [firstName, lastName, address, city, email, userId]
  );
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
};
