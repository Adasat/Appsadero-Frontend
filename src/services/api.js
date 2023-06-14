import { useColorScheme } from "@mui/material";
import { esES } from "@mui/x-data-grid";
import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:3000/api",
    timeout: 3000
})

