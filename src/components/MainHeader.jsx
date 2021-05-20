import React from "react";
import { useTranslation } from "react-i18next";

const MainHeader = () => {
  const { t } = useTranslation(["global", "header"]);

  return (
    <header className="header">
      <h1>{t("header:title")}</h1>
      <input type="text" placeholder={t("header:placeholder")} />
      <p>{t("header:test")}</p>
      <p>{t("header:test1")}</p>
      <p>{t("test")}</p>
      <p>{t("test1")}</p>
    </header>
  );
};

export default MainHeader;