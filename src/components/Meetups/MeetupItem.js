import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";
import FavoritesContext from "../store/FavoritesContext";

const MeetupItem = ({ id, image, title, address, description }) => {
  const ctx = useContext(FavoritesContext);

  const toggleFavoritesHandler = () => {
    if (ctx.isFavorite(id)) {
      ctx.removeFavorite(id);
    } else {
      ctx.addFavorite({
        id: id,
        image: image,
        title: title,
        address: address,
        description: description,
      });
    }
  };
  return (
    <Card>
      <li className={classes.item}>
        <div>
          <img className={classes.image} src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h1>{title}</h1>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div>
          <button onClick={toggleFavoritesHandler} className={classes.actions}>
            {ctx.isFavorite(id) ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
