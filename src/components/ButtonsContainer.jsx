import Style from "./ButtonsContainer.module.css";
import PropTypes from "prop-types"

function ButtonsContainer({eventHandalar}) {
  const buttons = [
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "0",
    "00",
    ".",
    "/",
    "C",
    "B",
    "%",
    "=",

  ];
  return (
    <div className={Style.btnContainer}>
      {buttons.map((button, index) => <button key={index} onClick={eventHandalar}>{button}</button>)}
    </div>
  );
}

ButtonsContainer.propTypes = {
  eventHandalar : PropTypes.func.isRequired,
}

export default ButtonsContainer;
