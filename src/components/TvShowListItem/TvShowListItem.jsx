import React from "react";
import s from "./style.module.css";
import { Base_Cover_image } from "../../config";
const MAX_TITLE_CHAR = 20;
const TvShowListItem = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvShow.name}
        src={Base_Cover_image + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow && tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

export default TvShowListItem;
