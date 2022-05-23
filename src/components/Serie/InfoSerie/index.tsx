import { Heading, VStack, Text, HStack, Box, Icon } from "@chakra-ui/react";
import { RiStarFill } from "react-icons/ri";
import { useAppSelector } from "../../../hooks/reduxAppHooks";

export function InfoSerie() {

    const data = useAppSelector(state => state.serie.data)

    const premiered = [data?.premiered.split('-')]
    const ended = [data?.ended ? data.ended.split('-') : null]

    return (
        <VStack
            spacing='6'
            alignItems='flex-start'
            maxW={800}
        >
            <Heading textTransform='uppercase'>{data?.name}</Heading>
            <HStack spacing={5}>
                <Text>Uma série {data?.network.name}</Text>
                <HStack
                    bg='gray.600'
                    borderRadius='3px'
                    spacing='1'
                >
                    <Icon as={RiStarFill} color='pink.900' />
                    <Text
                        fontSize='sm'
                    >
                        {data?.rating?.average}
                    </Text>
                </HStack>
                <Text>{premiered ?? premiered[0]} - {ended ? ended[0] : 'Até o momento'}</Text>
            </HStack>
            <HStack>
                {data?.genres.map((genre, index) => (
                    <Text key={genre}>{genre} {index != data?.genres.length - 1 && '|'}</Text>
                ))}
            </HStack>
            <Text dangerouslySetInnerHTML={{ __html: data?.summary }}></Text>
        </VStack>
    )
}