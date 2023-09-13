import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { TVShowApi } from "./tv-showApi";
import { Base_image } from "./config";
import TvShowDetails from "./components/TVShowDetails/TvShowDetails";
import logoImg from "./assets/img/logo.png";
import Logo from "./components/Logo/Logo";
import TvShowListItem from "./components/TvShowListItem/TvShowListItem";
import TvShowList from "./components/TvShowList/TvShowList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);
  async function fetchPopular() {
    try {
      const popularShow = await TVShowApi.fetchPopular();
      if (popularShow.length > 0) {
        setCurrentTvShow(popularShow[0]);
      }
    } catch (error) {
      alert("some error");
    }
  }
  async function fetchPopularRecommendation(tvShowId) {
    console.log("id", tvShowId);
    try {
      const recommendation = await TVShowApi.fetchPopularRecommendations(
        tvShowId
      );
      console.log(recommendation, "iii");
      if (recommendation.length > 0) {
        console.log("isnide");
        setRecommendationList(recommendation.slice(0, 10));
      }
    } catch (error) {
      alert("some error");
    }
  }
  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowApi.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTvShow(searchResponse[0]);
      }
    } catch (error) {
      alert("some error");
    }
  }
  const updateCurrentTvShow = (tvShow) => {
    setCurrentTvShow(tvShow);
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  useEffect(() => {
    if (currentTvShow) {
      console.log("im here");
      fetchPopularRecommendation(currentTvShow.id);
    }
  }, [currentTvShow]);
  console.log(recommendationList);
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${Base_image}${currentTvShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Watowatch"
              subtitle="Find a Show you like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TvShowDetails tvShow={currentTvShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTvShow && recommendationList && (
          <TvShowList
            onClickItem={updateCurrentTvShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
};

export default App;
