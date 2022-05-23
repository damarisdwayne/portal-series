import { Button, Heading, HStack, VStack, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

export default function notFound() {
    return (
        <HStack justify='space-between' h='calc(100vh - 60px)' p='8' maxW={1280} mx='auto'>
            <VStack alignItems='flex-start' spacing={4}>
                <Heading size='4xl'>Ops...</Heading>
                <Heading size='lg'>Essa página não foi encontrada.  </Heading>
                <Text fontSize='20px' mb='8'>O link que você pesquisou provavelmente não existe ou a página foi removida.</Text>
                <Box mt='8'>
                    <Link href='/searchSerie'>
                        <Button
                            bg='linearGradient.pink'
                            _hover={{
                                bg: 'linearGradient.blue',
                                transition: 'background 0.2s'
                            }}
                            mt='8'
                            size='lg'
                        >
                            Voltar para a Home
                        </Button>
                    </Link>
                </Box>
            </VStack>
            <Text
                fontSize='300px'
                color='#C21DC6'
                fontWeight='bold'
                background-clip='text'
                lineHeight='340px'
                textShadow='1px -1px 0 #2f5d87, 
                2px -2px 0 #2e5a83, 
                3px -3px 0 #2d5880, 
                4px -4px 0 #2b557c, 
                5px -5px 0 #2a5378, 
                6px -6px 0 #295074, 
                7px -7px 0 #274d71, 
                8px -8px 0 #264b6d, 
                9px -9px 0 #254869, 
                10px -10px 0 #234665, 
                11px -11px 0 #224361, 
                12px -12px 0 #21405e, 
                13px -13px 12px rgba(0, 0, 0, 0.55), 
                13px -13px 1px rgba(0, 0, 0, 0.5)'
            >
                404
            </Text>
        </HStack>
    )
}