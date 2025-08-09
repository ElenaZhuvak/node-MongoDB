import createHttpError from "http-errors";
import { User } from "../db/models/user.js";
import bcrypt from 'bcrypt';

export const registerUserService = async(payload) => {
    const user = await User.findOne({email: payload.email})
    if(user) {
        throw createHttpError(409, 'Email in use');
    }

    const encryptedPassword = await bcrypt.hash(payload.password, 10);

    return await User.create({...payload, password: encryptedPassword});
};