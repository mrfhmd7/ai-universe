import React from "react";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <>
      <Header/>
      <Button>Sort by Date</Button>
      <Card></Card>
      <Button>See More</Button>
    </>
  );
};

export default App;
