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
    rating: any
    ended: any
    premiered: any
    _embedded: {
      episodes: any
    }
    summary: any
    image: any
    genres: any
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