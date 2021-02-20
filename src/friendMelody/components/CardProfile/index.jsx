import React from "react";
import { Picture } from "./styled";
import useSentMelody from "./../../hooks/useSentMelody";

const CardProfile = ({ image, name, userId }) => {
  const {
    handleSentMelody,
    handleClickButton,
    handleInputChange,
    showInput,
    invalidInput,
  } = useSentMelody(userId);

  return (
    <div>
      <Picture src={image} />

      <h4>{`Name your friend: ${name}`}</h4>
      <button onClick={handleClickButton}>Input Melody</button>
      {showInput && (
        <div>
          <input onChange={handleInputChange} />
          <button onClick={handleSentMelody}>Sent Melody to your friend</button>
        </div>
      )}
      <div>
          {
              invalidInput && <div>Invalid melody: You sent on ower melody</div>
          }
      </div>
    </div>
  );
};

export default CardProfile;
