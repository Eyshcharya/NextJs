import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

interface EventProps {
  events: Array<any>;
}

const Events = ({ events }: EventProps) => {
  const router = useRouter();
  const [sportEvents, setSportEvents] = useState<[]>();

  // client side data fetching
  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=Category A`
    );
    const data = await response.json();
    setSportEvents(data);
    // shallow route
    router.push(`/events?category=Category A`, undefined, { shallow: true });
  };

  return (
    <>
      <h1>Events</h1>
      <button onClick={fetchSportsEvents}>Show Sports Events</button>
      <hr />
      {sportEvents !== undefined ? (
        <>
          {sportEvents?.map((e: any) => {
            return (
              <div key={e.id}>
                <h2>
                  {e.title} | {e.category}
                </h2>
                <h4>{e.date}</h4>
                <p>{e.description}</p>
                <hr />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {events?.map((e) => {
            return (
              <div key={e.id}>
                <h2>
                  {e.title} | {e.category}
                </h2>
                <h4>{e.date}</h4>
                <p>{e.description}</p>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
export default Events;

// logic for server side rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { category } = context.query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      events: data,
    },
  };
}
