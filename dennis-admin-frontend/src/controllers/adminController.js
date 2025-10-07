import { adminModel } from "../models/adminModel";

export const adminController = {
   async register(name, email, password) {
    try {
      return await adminModel.register(name, email, password);
    } catch (error) {
      throw new Error(error?.response?.data?.message || "Registration failed");
    }
  },

  async login(email, password) {
    try {
      return await adminModel.login(email, password);
    } catch (error) {
      throw new Error(error?.response?.data?.message || "Login failed");
    }
  },
};
