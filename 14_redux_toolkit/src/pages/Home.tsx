import { useSelector } from "react-redux"

export const Home = () => {
  const username = useSelector((state: any) => state.user.value.username)

  return (
    <h1>This is Home Page, Welcome {username}
    </h1>
  )
}