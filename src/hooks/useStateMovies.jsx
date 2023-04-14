import { useContext } from "react";
import { StateMovies } from "../services/StateMovies";

export const useStateMovies = () => useContext(StateMovies)