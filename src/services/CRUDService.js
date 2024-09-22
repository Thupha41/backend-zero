const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query("SELECT * FROM Persons p ");
  return results;
};

module.exports = {
  getAllUsers,
};
