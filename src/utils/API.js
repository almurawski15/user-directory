import axios from "axios";

export default {
  // Gets all users
    getData: () => axios.get("https://randomuser.me/api/?results=100")
  }