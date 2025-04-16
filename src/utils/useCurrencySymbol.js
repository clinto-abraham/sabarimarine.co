// utils/useCurrencySymbol.js
import { useEffect, useState } from "react";
import axios from "axios";

const useCurrencySymbol = () => {
  const [currencySymbol, setCurrencySymbol] = useState("$"); // Default is Dollar
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencySymbol = async () => {
      try {
        // IP Geolocation API (ipapi for example)
        const response = await axios.get("https://ipapi.co/json/");
        const country = response.data.country_name;

        // Set the currency symbol based on the country
        if (country === "India") {
          setCurrencySymbol("₹"); // Set to Indian Rupee symbol if the user is in India
        } else {
          setCurrencySymbol("$"); // Default to Dollar for other countries
        }
      } catch (error) {
        console.error("Error fetching geolocation:", error);
        setCurrencySymbol("$"); // Fallback to Dollar if there's an error
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencySymbol();
  }, []);

  return { currencySymbol, isLoading };
};

export default useCurrencySymbol;
