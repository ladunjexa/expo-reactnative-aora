import { useState, useEffect } from "react";
import { Alert } from "react-native";

import type { TUseAppwrite } from "@/types";

export default function useAppwrite(fn: () => Promise<any>): TUseAppwrite {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();

      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
}
