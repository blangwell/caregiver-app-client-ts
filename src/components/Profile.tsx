interface ProfileProps {
  userName: string;
  userAuthenticated: boolean;
}

export default function Profile(props: ProfileProps):JSX.Element {
  return (
    <div>
      <h1>{props.userName}'s Profile</h1>
      <p>Authenticated: {props.userAuthenticated.toString()}</p>
    </div>
  )
};