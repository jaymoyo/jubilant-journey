import { supabase } from "./supabase";
import { useQuery } from "react-query";

interface ITodos {
  id: number;
  created_at: string;
  task: string;
  is_completed: boolean;
}

const FetchBigTasks = async (): Promise<any> => {
  const response = await supabase.from<ITodos>("todos").select("*");
  const tasks = response?.data;
  return tasks;
  //return tasks?.map((todo) => todo.task.toUpperCase());
};

export const BigTasks = () => useQuery(["todos"], FetchBigTasks);
