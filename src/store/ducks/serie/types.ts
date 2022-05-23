/**
 * Action types
 */
export enum SerieTypes {
    ADD = '@serie/ADD',
    REMOVE = "@serie/REMOVE",
}
  
  /**
   * Data types
   */
  export interface Serie {
    network: any
    rating: {
      average: string
    }
    ended: any
    premiered: any
    _embedded: {
      episodes: any
    }
    summary: string
    image: string
    genres: string[],
    id: string
    name: string
    season: number
  }
  
  /**
   * State type
   */

  export interface SerieState {
    readonly data: Serie
}