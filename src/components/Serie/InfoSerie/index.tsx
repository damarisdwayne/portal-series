import { Heading, VStack, Text, HStack, Box, Icon } from "@chakra-ui/react";
import { RiStarFill } from "react-icons/ri";
import { useAppSelector } from "../../../hooks/reduxAppHooks";

export function InfoSerie() {

    const data = useAppSelector(state => state.serie.data)

    const premiered = new Date(data?.premiered).toLocaleDateString('pt-BR', {
        year: 'numeric'
    })

    const ended = new Date(data?.ended).toLocaleDateString('pt-BR', {
        year: 'numeric'
    })

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
                <Text>{premiered ?? premiered} - {ended ? ended : 'Até o momento'}</Text>
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