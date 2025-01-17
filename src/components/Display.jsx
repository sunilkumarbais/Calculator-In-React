import Style from "./Display.module.css"
import PropTypes from "prop-types";

function Display({displayValue}) {
  return (
    <>
       <input type="text" className={Style.display} value={displayValue || ''}  readOnly/>
    </>
  )
}

Display.propTypes = {
  displayValue : PropTypes.oneOfType([PropTypes.string, PropTypes.number]) .isRequired,
}

export default Display;