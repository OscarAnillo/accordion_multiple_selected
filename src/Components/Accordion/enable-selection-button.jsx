import PropTypes from "prop-types";

export const EnableSelectionButton = ({
  setEnableMultiSelection,
  enableMultiSelection,
}) => {
  return (
    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
      Enable Multi Selection
    </button>
  );
};

EnableSelectionButton.propTypes = {
  setEnableMultiSelection: PropTypes.func,
  enableMultiSelection: PropTypes.bool,
};
