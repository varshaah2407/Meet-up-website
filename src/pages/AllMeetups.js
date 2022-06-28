import {useState, useEffect} from 'react'

import React from "react";
// import ReactDOM from 'react-dom/client';

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image: "https://media.timeout.com/images/105509088/image.jpg",
//     address: "123 Main Street",
//     description: "This is a first amazing meetup, so hurry and register!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image: "https://media.timeout.com/images/105509088/image.jpg",
//     address: "123 Main Street",
//     description: "This is our second amazing meetup, so hurry and register!",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-129e9-default-rtdb.firebaseio.com/meetups.json'
      ).then(response => {
        return(response.json());
    }).then(data=>{
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

 

  if (isLoading) {
    return 
    <section>
      <p>Loading...</p>
    </section>
  }

  return (
    <section>
      <h1>All Meetups page</h1>
    <MeetupList meetups={loadedMeetups}/>
    </section>
  );
}

export default AllMeetupsPage;
