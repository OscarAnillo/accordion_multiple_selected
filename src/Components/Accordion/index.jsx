import { useState } from "react";
import { EnableSelectionButton } from "./enable-selection-button";
import { DisplayAccordionData } from "./display-accordion-data";
import data from "./data";
import "./styles.css";

export const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  function handleMultiSelection(id) {
    let copyMultiple = [...multipleSelected];
    const findIndexOfId = copyMultiple.indexOf(id);
    if (findIndexOfId === -1) copyMultiple.push(id);
    else copyMultiple.splice(findIndexOfId, 1);

    setMultipleSelected(copyMultiple);
  }

  return (
    <div className="wrapper">
      {enableMultiSelection && <p>Multiple Selection Enabled</p>}
      <EnableSelectionButton
        setEnableMultiSelection={setEnableMultiSelection}
        enableMultiSelection={enableMultiSelection}
      />
      <DisplayAccordionData
        data={data}
        enableMultiSelection={enableMultiSelection}
        handleMultiSelection={handleMultiSelection}
        handleSingleSelection={handleSingleSelection}
        selected={selected}
        multipleSelected={multipleSelected}
      />
    </div>
  );
};
