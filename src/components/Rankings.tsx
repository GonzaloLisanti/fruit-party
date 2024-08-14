import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Item from "./Item";

interface RankingItem {
  id: number;
  name: string;
  score: number;
}

const Rankings: React.FC = () => {
  const [ranking, setRanking] = useState<RankingItem[]>([]);

  const callSupaBase = async () => {
    const { data } = await supabase
      .from("ranking")
      .select("*")
      .order("score", { ascending: false });

    if (data) {
      setRanking(data);
    }
    console.log(data);
  };

  useEffect(() => {
    callSupaBase();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="display-5 mb-4">Rankings</h2>
      <table className="table table-striped border">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((item, index) => (
            <Item key={item.id} name={item.name} score={item.score} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rankings;
