interface UserProps {
  user: any;
}

const user = ({ user }: UserProps) => {
  return (
    <div>
      <h4>{user?.name}</h4>
      <h6>{user?.email}</h6>
    </div>
  );
};
export default user;
