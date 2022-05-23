import { Flex, Icon, Text, IconButton, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowDownSLine, RiArrowLeftLine, RiSearchLine, RiUser3Fill } from "react-icons/ri";

export function Header() {
    const router = useRouter()

    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1280}
            alignItems='center'
            justify='space-between'
            direction='row'
            mx='auto'
            mt='4'
            px='6'
            align='center'

        >
            <HStack spacing={12}>
                <Link href='/searchSerie'>
                    <Image
                        src="images/logoHeader.svg"
                        alt="logo"
                        cursor='pointer'
                    />
                </Link>

                {!(router.asPath === '/searchSerie') &&
                    <Link href='/searchSerie'>
                        <HStack cursor='pointer'>
                            <Icon
                                as={RiArrowLeftLine}
                                fontSize='24'
                            />
                            <Text>Voltar para o Menu Principal</Text>
                        </HStack>
                    </Link>
                }
            </HStack>
            <HStack spacing='14' align='center'>
                {!(router.asPath === '/searchSerie') &&
                    <Icon
                        aria-label="Open search"
                        as={RiSearchLine}
                        fontSize='25'
                        outline='none'
                        cursor='pointer'
                        onClick={() => router.push('/searchSerie')}
                    />
                }


                <HStack>
                    <IconButton
                        aria-label="User"
                        icon={<Icon as={RiUser3Fill} fontSize='24' />}
                        variant='ghost'
                        borderRadius='50%'
                        bg='gray.800'
                    >
                    </IconButton>
                    <Icon as={RiArrowDownSLine} fontSize='20' />
                </HStack>

            </HStack>
        </Flex>
    )
}