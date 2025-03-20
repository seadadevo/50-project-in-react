import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoke, toggleLanguage } from "../../../app/features/jokeSlice";
import { useTranslation } from "react-i18next";
import "../i18n";
import "../datJoke.css";
import { RootState } from "../../../app/store";

export default function DadJokes() {
  const { joke, language } = useSelector((state: RootState) => state.joke);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(fetchJoke()); 
  }, [dispatch, language]);

  const handleChangeLanguage = () => {
    dispatch(toggleLanguage());
    const newLanguage = language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    dispatch(fetchJoke());
  };

  return (
    <div className="container container1">
      <h3>{t("title")}</h3>
      <div className="joke">{joke}</div>
      <button className="btn" onClick={() => dispatch(fetchJoke())}>
        {t("changeJoke")}
      </button>
      <button className="btn" onClick={handleChangeLanguage}>
        {t("changeLanguage")}
      </button>
    </div>
  );
}