import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import contacts from "./contacts";
const img = "https://picsum.photos/200";

const date = new Date();
const currentTime = date.getHours();

let greeting;
const customStyle2 = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Hello, Good Morning";
  customStyle2.color = "red";
} else if (currentTime < 18) {
  greeting = "Hello, Good Afternoon";
  customStyle2.color = "green";
} else {
  greeting = "Hello, Good Night";
  customStyle2.color = "blue";
}

function App() {
  return (
    <div>
      <h1 className="heading" style={customStyle2}>
        {greeting}
      </h1>
      <Header />
      <Note />
      <p>
        No matter where you are in life, we all need a little inspiration to
        fuel our journey. Every task we tackle, big or small, brings us closer
        to our goals. Let's keep moving, growing, and building the future we
        dream of. The best time to start is now!
      </p>
      <Footer />
      <h1 className="heading">Contact</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
