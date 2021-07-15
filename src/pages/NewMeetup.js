import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetup = () => {
  const history = useHistory();
  const newMeetupHandler = async (meetingData) => {
    try {
      await fetch(
        "https://react-events-proje-default-rtdb.firebaseio.com/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetingData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      history.replace("/");
    } catch (err) {
      console.log(err);
      window.alert("An error occurred.");
    }
  };
  return <NewMeetupForm addNewMeetup={newMeetupHandler} />;
};

export default NewMeetup;
