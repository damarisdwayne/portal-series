import { Heading, Input, VStack, InputGroup, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../hooks/reduxAppHooks";
import { addSerie } from "../store/ducks/serie/actions";

export default function SeachSeries() {
    const [inputData, setInputData] = useState('')
    const [searchedSerie, setSearchedSerie] = useState('')
    const router = useRouter()

    const url = `https://api.tvmaze.com/singlesearch/shows?q=${inputData}&embed=episodes`

    const dispath = useAppDispatch()

    async function handleChangeSearch() {
        if (inputData.trim() == '') {

            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'O campo de pesquisa não pode estar em branco!'
            })

            return
        }

        try {
            const response = await fetch(url)
            const data = await response.json()

            if (data === null) {
                router.push('/notFound')
                return
            }

            dispath(addSerie(data))

            router.push('/serie')

        } catch (error) {
            router.push('/notfound')
        }

    }

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setInputData(event.target.value)
    }

    return (
        <VStack
            w='100%'
            h='calc(100vh - 150px)'
            maxWidth={1000}
            alignItems='center'
            justify='center'
            mx='auto'
            px='6'
        >
            <Heading
                fontSize='4xl'
                mb='6'
                letterSpacing='2px'
            >
                Faça agora sua busca por séries incríveis
            </Heading>
            <InputGroup
                borderBottomColor='pink.900'
                borderBottomWidth='2px'
                borderRadius='none'
                maxWidth={600}
                w='100%'
                p='2'
            >
                <Input
                    placeholder="Pesquise Por Títulos"
                    _placeholder={{
                        color: 'gray.50',
                    }}
                    variant='unstyled'
                    value={inputData}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter')
                            handleChangeSearch
                    }}
                    onChange={handleChangeInput}
                >
                </Input>
                <Icon as={RiSearchLine} color='pink.900' fontSize='25px' cursor='pointer' onClick={handleChangeSearch} />
            </InputGroup>
        </VStack>
    )
}