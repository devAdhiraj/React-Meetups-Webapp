import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => {
        return (
          <MeetupItem
            title={meetup.title}
            id={meetup.id}
            key={meetup.id}
            description={meetup.description}
            image={meetup.image}
            address={meetup.address}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;
