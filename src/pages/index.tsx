import { Button, Flex, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "../components/Form/Input"

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {

  const { register, handleSubmit, formState, formState: { errors } } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  console.log(errors);

  const handleSingIn: SubmitHandler<SignInFormData> = async(data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems={'center'} 
      justifyContent={'center'}
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection={'column'}
        onSubmit={handleSubmit(handleSingIn)}
      >
        
        <Stack spacing={'4'}>

          <Input 
            label="Email"
            name="email"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          
          <Input 
            label="Senha"
            name="senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />

        </Stack>

         

        <Button
           type="submit"
           mt="6"
           colorScheme={'cyan'}
           color={'gray.200'}
           size="lg"
           isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>


      </Flex>
    </Flex>
  )
}
