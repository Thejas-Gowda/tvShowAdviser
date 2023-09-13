import React, { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";
const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      console.log(e.target.value);
      onSubmit(e.target.value);
      setValue("");
    }
  }
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon className={s.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        type="text"
        value={value}
        placeholder="Search a show you may like"
      />
    </>
  );
};

export default SearchBar;
