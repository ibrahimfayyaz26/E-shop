import { Platform } from "react-native";

let url;

Platform.OS == "android"
  ? (url = "http://localhost:192.168.43.1/api/26")
  : (url = "http://localhost:3000/api/26");

export default url;
