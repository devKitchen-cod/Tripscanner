/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import styles from "./styles/filter.module.scss";

const DropdownResults = (options, onSelect) => {
  const result = useSelector((state) => state.search.results);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };
  useEffect(() => {
    console.log('selectedOption', selectedOption);
  }, [selectedOption]);

  return (
    isOpen && (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <div className={styles.scrolabelContainer}>
              {result?.map((item, key) => (
                <div
                  className={styles.item}
                  onClick={() => handleSelect(item.title)}>
                  {item.title}
                </div>
              ))}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  );
};

export default DropdownResults;
