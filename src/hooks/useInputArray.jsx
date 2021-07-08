import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.includes(text)) {
        window.alert("duplicate!!!");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      window.alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  return { text, array, handleAdd, handleChange };
};