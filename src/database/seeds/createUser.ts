import bcrypt from "bcrypt";

import { DataSource } from "typeorm";

import { User } from "../entities/User";

export async function createUser(appDataSource: DataSource) {
  const userData = new User();

  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash("Pecege@1", salt);

  userData.uid = "6a1f43ff-af3c-4c88-b5cb-7f016f30d15a";
  userData.full_name = "admin";
  userData.email = "admin@example.com";
  userData.document = "1234567890";
  userData.password = hashed_password;
  userData.created_at = new Date();

  const userExist = await appDataSource.manager.findBy(User, {
    uid: userData.uid,
  });

  if (userExist.length === 0) {
    await appDataSource.manager.save(userData);
    console.log("User created successfully!");
  }
}
