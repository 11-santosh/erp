const userModel = require("./user.model");

const getUsers = async () => {
  return await userModel.find();
};

const getUserById = async (id) => {
  const user = await userModel.findById(id);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return user;
};

const createUser = async (data) => {
  // Business logic goes here
  return await userModel.create(data);
};

const updateUser = async (id, data) => {
  await getUserById(id);

  return await userModel.update(id, data);
};

const deleteUser = async (id) => {
  await getUserById(id);

  return await userModel.delete(id);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
