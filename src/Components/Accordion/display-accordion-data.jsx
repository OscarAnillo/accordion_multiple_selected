import PropTypes from "prop-types";

export const DisplayAccordionData = ({
  data,
  selected,
  enableMultiSelection,
  handleMultiSelection,
  handleSingleSelection,
  multipleSelected,
}) => {
  return (
    <div className="accordion">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="item" key={item.id}>
            <div
              className="title"
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSelection(item.id)
              }
            >
              <h3>{item.question}</h3>
              <span>+</span>
            </div>
            {selected === item.id ||
            multipleSelected.indexOf(item.id) !== -1 ? (
              <div className="content">
                <p>{item.answer}</p>
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No Data!</div>
      )}
    </div>
  );
};

DisplayAccordionData.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.string,
  enableMultiSelection: PropTypes.bool,
  handleMultiSelection: PropTypes.func,
  handleSingleSelection: PropTypes.func,
  multipleSelected: PropTypes.array,
};
