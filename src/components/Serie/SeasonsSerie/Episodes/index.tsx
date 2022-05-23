import { VStack, Text, HStack, Heading, Image } from "@chakra-ui/react";

export function Episodes({ episodesFilter }: any) {

    return (
        <VStack alignItems='center' spacing={10}>
            {episodesFilter.map((episode, index) => {
                return (
                    <HStack
                        key={episode?.id}
                        alignItems='flex-start'
                        w='100%'
                        spacing={6}
                        maxH={100}
                        overflowY='hidden'

                    >
                        <Text
                            alignSelf='center'
                            minW='35px'
                            textAlign='end'
                            fontSize='3xl'
                            fontWeight='bold'
                        >
                            {index + 1}
                        </Text>
                        <Image
                            src={episode?.image?.medium}
                            alt='Tumb'
                            boxSize="150"
                            h='100px'
                            borderRadius='8px'
                        />

                        <VStack align='start'>
                            <Heading size='md'>{episode?.name}</Heading>
                            <Text dangerouslySetInnerHTML={{ __html: episode?.summary }}></Text>
                        </VStack>

                    </HStack>
                )
            })}
        </VStack>
    )
}