import { useRef } from "react";
import classes from "./NewMeetup.module.css";
import Card from "../UI/Card";

const NewMeetupForm = ({ addNewMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const meetingData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };
    addNewMeetup(meetingData);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleInputRef} type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input ref={imageInputRef} type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input ref={addressInputRef} type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            ref={descriptionInputRef}
            rows="5"
            required
            id="description"
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
