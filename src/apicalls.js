import axios from "axios";

export const Logincall = async (user) => {
  try {
    const res = await axios.post("/auth/login", user);
     return res;
  } catch (err) {
    console.error(err);
    throw err; // You might want to rethrow the error for error handling in the calling code
  }
};