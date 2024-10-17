import { useQuery } from '@tanstack/react-query';
import Axios from "axios";

export const useGetCat = () => {
  const { data, refetch, isLoading: isCatLoading } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  const refetchData = () => {
    alert("REFETCH DATA");
    refetch();
  }

  return { data, refetchData, isCatLoading };
}
