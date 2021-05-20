import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageSelector">
      <button onClick={() => changeLanguage("am")}>am</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <button onClick={() => changeLanguage("ru")}>ru</button>
    </div>
  );
}