# React Meetups WebApp

This project is a simple webapp where the user can add meetups, view a list of their meetups and view a list of their favorite meetups.
The project uses React, react navigation, firebase realtime database to persist meetups data added by the user.

## All Meetups Page
![image](https://user-images.githubusercontent.com/75645547/125976991-dfa573c0-1062-4082-abca-381546884c48.png)
This page shows a list of the user's meetups.

## Favorites Page
![image](https://user-images.githubusercontent.com/75645547/125976845-c04ae369-9cbe-4499-a2f5-32daa2565625.png)
This page uses reusable components allowing it to have consistent UI with the all meetups page. The difference being that it only shows meetups that the user has added to their favorites.

## Add New Meetups Page
![image](https://user-images.githubusercontent.com/75645547/125976887-c0547374-4f57-4dbf-bfd3-af066ff312ac.png)
This page uses a form which the user can fill to add a new meetup. Upon submitting, the form data is validated and the new meetup data is added in the firebase realtime database.

_This project was made by following a tutorial with the purpose of learning react._
