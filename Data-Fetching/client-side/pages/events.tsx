import { useState } from "react";

interface EventProps {
  events: Array<any>;
}

const Events = ({ events }: EventProps) => {
  const [sportEvents, setSportEvents] = useState<[]>();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=Category A`
    );
    const data = await response.json();
    setSportEvents(data);
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
export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/events`);
  const data = await response.json();

  return {
    props: {
      events: data,
    },
  };
}
