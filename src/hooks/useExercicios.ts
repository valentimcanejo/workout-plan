"use client";

import { useEffect, useState } from "react";
import supabase from "../backend/supabase/init-supabase";

export const useRealtimeExercicios = (treinoId: string) => {
  const [exercicios, setExercicios] = useState<any[]>([]);

  useEffect(() => {
    const fetchExercicios = async () => {
      const { data } = await supabase
        .from("exercicios")
        .select("*")
        .eq("treino_id", treinoId);
      setExercicios(data || []);
    };

    fetchExercicios();

    const channel = supabase
      .channel(`exercicios-${treinoId}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "exercicios" },
        (payload) => {
          fetchExercicios(); // Atualiza a lista ao detectar mudanças
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [treinoId]);

  return exercicios;
};
