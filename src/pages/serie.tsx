import { VStack } from "@chakra-ui/react";

import { InfoSerie } from '../components/Serie/InfoSerie'
import { TemporadaSerie } from "../components/Serie/SeasonsSerie";

export default function Serie() {
    return (
        <VStack
            p='8'
            maxW={1280}
            mx='auto'
            alignItems='flex-start'
            spacing='12'
            mt={6}
        >
            <InfoSerie/>
            <TemporadaSerie/>
        </VStack>
    )
}