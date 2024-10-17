import { useGetCat } from "../useGetCat";

export const Cat = () => {
  const { data, refetchData, isCatLoading } = useGetCat();

  if(isCatLoading) return <h1>Loading...</h1>

  return (
    <div>
      <button onClick={refetchData}>Refetch</button>
      <h1>{data?.fact}</h1>
    </div>
  );
}