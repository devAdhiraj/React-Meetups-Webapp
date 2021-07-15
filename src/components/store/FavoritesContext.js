import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favoriteMeetups, setFavoriteMeetups] = useState([]);
  const addFavoriteHandler = (meetup) => {
    if (!checkIsFavorite(meetup.id)) {
      setFavoriteMeetups((prevFavMeetups) => {
        return prevFavMeetups.concat(meetup);
      });
    }
  };

  const removeFavoriteHandler = (meetupId) => {
    setFavoriteMeetups((meetups) => {
      return meetups.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const checkIsFavorite = (meetupId) => {
    return favoriteMeetups.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: favoriteMeetups,
    favoritesCount: favoriteMeetups.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: checkIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
