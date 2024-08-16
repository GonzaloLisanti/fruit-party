import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Item from "./Item";
import Instructions from "./Instructions";
import { useTranslation } from "react-i18next";

interface RankingItem {
  id: number;
  name: string;
  score: number;
}

const Rankings: React.FC = () => {
  const [ranking, setRanking] = useState<RankingItem[]>([]);
  const { t } = useTranslation();

  const callSupaBase = async () => {
    const { data } = await supabase
      .from("ranking")
      .select("*")
      .order("score", { ascending: false });

    if (data) {
      setRanking(data);
    }
  };

  useEffect(() => {
    callSupaBase();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 className="display-5 text-center flex-grow-1">
          {t("Rankings.rankings_title")}
        </h2>
      </div>
      <div className="ms-3">
        <Instructions />
      </div>
      <table className="table table-striped border">
        <thead>
          <tr>
            <th>#</th>
            <th>{t("Rankings.name")}</th>
            <th>{t("Rankings.score")}</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((item, index) => (
            <Item
              key={item.id}
              name={item.name}
              score={item.score}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rankings;
