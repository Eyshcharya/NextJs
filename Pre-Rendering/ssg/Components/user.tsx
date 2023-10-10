interface UserProps {
  user: any;
}

const User = ({ user }: UserProps) => {
  return (
    <div>
      <h4>{user?.name}</h4>
      <h6>{user?.email}</h6>
    </div>
  );
};
export default User;
