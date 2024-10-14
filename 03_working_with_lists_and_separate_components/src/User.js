// Using components for cleaner code
export const User = (props) => {
  return (
    <div key={props.id}>
      UserID : {props.id}, Name : {props.name}, Age : {props.age}
    </div>
  )
}