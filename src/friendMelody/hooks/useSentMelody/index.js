import { useCallback, useState } from "react";
import axios from "axios";

import { BASE_API } from "./../../constants";

export default function useSentMelody(userId) {
  const [showInput, setInput] = useState(false);
  const [inputMelody, setInputMelody] = useState();
  const [invalidInput, setInvalid] = useState(false)

  const handleClickButton = useCallback(() => {
    setInput(true);
  }, [setInput]);

  const handleInputChange = useCallback(
    (e) => {
      setInputMelody(e.target.value);
    },
    [setInputMelody]
  );

  const handleSentMelody = useCallback(async () => {
    let sucess = "";
    setInvalid(false)

    await axios
      .get(`${BASE_API}api/ownership?userId=${userId}&melodyId=${inputMelody}`)
      .then((respones) => {
        sucess = respones.status;
      });

    if (sucess === "available") {
      await axios
        .post(`${BASE_API}api/purchase`, {
          userId: userId,
          melodyId: inputMelody,
        })
        .then((response) => {
          console.log(response);
        });
    }else {
        setInvalid(true)
    }
  }, [userId, inputMelody, setInvalid]);

  return {
    handleSentMelody,
    handleClickButton,
    handleInputChange,
    showInput,
    inputMelody,
    invalidInput
  };
}
