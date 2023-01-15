import GameMenager from "@/class/gameMenager";
import { reactive } from "vue";

export const store = reactive({
  gm: new GameMenager()
});
