import { SerieTypes } from "./types";


export const addSerie = (data: any) => ({
    type: SerieTypes.ADD,
    payload: data
  });

export const removeSerie = () => ({
  type: SerieTypes.REMOVE,
});