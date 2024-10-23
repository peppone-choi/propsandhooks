import React from "react";
import TypeApp from "../components/TypeApp/TypeApp";

const TypeView = () => {
  const words = ["test", "hello", "world"];
  const [index, setIndex] = React.useState(0);
  return (
    <TypeApp
      word={words[index]}
      changeFunc={(isCorrect) => {
        if (isCorrect) {
          setIndex((prev) => (prev + 1) % words.length);
        }
      }}
    />
  );
};

export default TypeView;
