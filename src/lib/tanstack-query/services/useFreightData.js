import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFreight = async () => {
  const { data } = await axios.get("/api/freight");
  return data;
};

export const useFreightData = () => {
  return useQuery(["freight"], fetchFreight);
};
