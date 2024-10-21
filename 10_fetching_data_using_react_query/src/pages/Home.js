import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data: catData, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
  });

  if (isError) {
    return <h1>Error...</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <h1>THIS IS THE HOME PAGE
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Update Data</button>
    </h1>
  );
}
