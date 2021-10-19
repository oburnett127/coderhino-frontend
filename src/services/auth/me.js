import axios from "libs/axios";

export default async function me() {
  const { data } = await axios.get("/api/users/");
  return data;
}