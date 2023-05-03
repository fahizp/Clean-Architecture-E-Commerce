import { response } from "express";
import Auth from "../models/userModel";
import jwt from "jsonwebtoken";
const jwtkey = "fahiz";
export const AuthrepositoryImpl = () => {
  const createUser = async (Name: string, Email: string, Password: string) => {
    return new Promise<any>(async (resolve, reject) => {
      const userExists = await Auth.findOne({ Email: Email });

      if (userExists) resolve({ message: "User already exists" });
      else {
        await Auth.create({ Name, Email, Password })
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      }
    });
  };

  const userLogin = async (Email: string, Password: string) => {
    return new Promise(async (resolve, reject) => {
      const userExists = await Auth.findOne({ Email: Email });

      if (!userExists) reject({ message: "User is not exist please register" });
      else {
        if (Password !== userExists.Password) reject({ message: "Incorrect Password" });

        const paylod = { Email, userName: userExists.Name };

        jwt.sign(paylod, jwtkey, { expiresIn: "2d" }, (err, token) => {
          if (err) reject(err);
          else resolve({ message: "Success", token: token });
        });
      }
    });
  };
  return {
    createUser,
    userLogin,
  };
};


export type AuthrepositoryImpl = typeof AuthrepositoryImpl;