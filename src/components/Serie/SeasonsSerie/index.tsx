import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/reduxAppHooks";
import { Episodes } from "./Episodes";

export function SeasonsSerie() {
    const [seasonSelected, setSeasonSelected] = useState(1)

    const [episodesFilter, setEpisodeFilter] = useState([]);

    const data = useAppSelector(state => state.serie.data)

    let arraySeasons = []
    data?._embedded?.episodes.map(episodes => {
        if (!arraySeasons.includes(episodes?.season)) {
            arraySeasons.push(episodes?.season)
        }
    })

    const allEpisodes = data?._embedded?.episodes.map(JSON.stringify)
        .filter(function (item, index, arr) {
            return arr.indexOf(item, index + 1) === -1;
        })
        .map(JSON.parse)

    function showEpisodesOfSeason(numberSeason: number) {
        setSeasonSelected(numberSeason)

        const arrayEpisodesFiltered = allEpisodes.filter((ep) => {
            if (ep.season == numberSeason) {
                return ep;
            }
        });

        setEpisodeFilter(arrayEpisodesFiltered)
    }

    useEffect(() => {
        showEpisodesOfSeason(1)
        setSeasonSelected(1)
    }, [])

    return (
        <VStack spacing={6} maxW={800} align='start' mx='auto'>
            <Heading size='lg'>Temporadas:</Heading>
            <HStack flexWrap='wrap' align='start'>
                {arraySeasons?.map(season => {

                    return (
                        
                        <Button
                            key={season}
                            bg={seasonSelected === season ? 'linearGradient.pink' : 'none'}
                            borderRadius='18px'
                            _focus={{
                                outline: 0
                            }}
                            _hover={{
                                bg: 'linearGradient.pink'
                            }}
                            onClick={() => showEpisodesOfSeason(season)}
                            ml='5px'
                            mb='2'
                        >
                            {season}ª Temporada
                        </Button>
                    )
                })
                }
            </HStack>
            <Episodes episodesFilter={episodesFilter} />
        </VStack >
    )
}