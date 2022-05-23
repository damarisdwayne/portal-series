import { Flex, Button, Stack, Text, VStack, Heading, Image } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'
import { useRouter } from 'next/router'
import { useAppSelector } from '../hooks/reduxAppHooks'

type SignInFormData = {
  login: string
  password: string
}

const schema = yup.object({
  login: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
}).required()

export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: yupResolver(schema)
  })

  const router = useRouter()

  
  const user = useAppSelector(state => state.user.data)


  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {

    try {

      const login = values.login;
      const password = values.password;


      if(login != user?.email){
          return false;
      }

      if(password != user?.password){
        return false;
    }
      
       window.localStorage.setItem('authorized', 'true');

       router.push('/searchSerie')
      
     } catch (err) {
        console.log('Erro: '+ err)
     }

  }
  

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'           
    >

      <Flex
        as='form'
        w='100%'
        maxWidth={390}
        bg='white'
        p='6'
        pb='10'
        borderRadius={8} //multiplica por 4 = 2rem ou 32px
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Image
          alignSelf='center'
          src="images/Brand.svg"
          alt="logo"
          boxSize='130px'
          mb='6'
        />
        <Heading
          alignItems='center'
          mb='6'
        >
          <Text
            fontSize='3xl'
            color='gray.900'
            textAlign='center'
          >Entre para acessar <br />
            conteúdos exclusivos
          </Text>
        </Heading>

        <Stack spacing={4}>
          <Input
            name='login'
            type='login'
            label='Login'
            error={errors.login}
            {...register('login')}
          />

          <Input
            name='password'
            type='password'
            error={errors.password}
            label='Senha'
            {...register('password')}
          />
        </Stack>

        <VStack>
          <Flex alignItems='center' justifyContent='space-between' mb='2'>
            <Button
              type='submit'
              mt='6'
              colorScheme='pink'
              size='lg'
              isLoading={isSubmitting}
              fontSize='14px'
              background= 'linearGradient.pink'
              _hover={{
                background: 'linearGradient.blue',
                transition: 'background 0.2s'
              }}
            >
              Acessar Conteúdos
            </Button>

            <Text
              fontSize='sm'
              textDecoration='underline'
              color='gray.400'
              mt='8'
              ml='6'
            >Esqueci minha senha
            </Text>
          </Flex>
          <Button
            type='submit'
            mt='6'
            colorScheme='pink'
            size='lg'
            variant='outline'
            fontSize='14px'
            _hover={{
              background: '#F7E1FF',
              transition: 'background 0.2s'
            }}
          >
            Não possuo uma conta. Quero me cadastrar!
          </Button>
        </VStack>

      </Flex>
    </Flex>
  )
}
