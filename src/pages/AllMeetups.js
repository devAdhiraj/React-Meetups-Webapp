import { useState, useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const rawResp = await fetch(
          "https://react-events-proje-default-rtdb.firebaseio.com/.json"
        );
        const resp = await rawResp.json();
        const tempMeetups = [];
        for (const key in resp.meetups) {
          tempMeetups.push({ id: key, ...resp.meetups[key] });
        }
        setMeetups(tempMeetups);
        setIsLoading(false);
      } catch (TypeError) {
        setIsLoading(false);
        setMeetups([
          {
            id: 1,
            title: "No Meetups yet",
            address: "Try going to the /new-meetups page",
            image: "https://static.thenounproject.com/png/67363-200.png",
            description: "Try adding meetyps on the new meetups page",
          },
        ]);
      }
    };
    fetchMeetups();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>All Meetups Page</h1>
        <MeetupList meetups={meetups} />
      </div>
    );
  }
};

export default AllMeetups;
