import dotenv from "dotenv";
import path from "path";
// current working directory
// console.log(process.cwd());
dotenv.config({ path: path.join(process.cwd(), ".env") });