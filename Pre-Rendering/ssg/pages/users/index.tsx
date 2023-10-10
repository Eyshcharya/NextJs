import User from "@/Components/user";

const Users = ({ users }: Object[] | any) => {
  return (
    <>
      <h1>List of Users</h1>
      {users?.map((user: Object | any) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};
export default Users;

// Pre-rendering Data in Next
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  // console.log(data);

  return { props: { users: data } };
}
