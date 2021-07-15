import { useContext } from "react";
import FavoritesContext from "../components/store/FavoritesContext";
import MeetupList from "../components/Meetups/MeetupList";

const FavoritesPage = () => {
  const ctx = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {ctx.favoritesCount === 0 ? (
        "You don't have any favorites yet. Start adding some?"
      ) : (
        <MeetupList meetups={ctx.favorites} />
      )}
    </section>
  );
};

export default FavoritesPage;
