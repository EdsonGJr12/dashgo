import { Button, Flex, Input, Stack, FormLabel, FormControl } from "@chakra-ui/react"

export default function Home() {
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
      >
        <Stack spacing={'4'}>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input 
              name="email" 
              type="email"
              focusBorderColor={'cyan.400'}
              bgColor={'gray.900'}
              variant={'filled'}
              _hover={{
                bgColor: 'gray.900'
              }}
              size={'lg'}
            />
          </FormControl>
          
          <FormControl>
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input 
              name="password" 
              type="password"
              focusBorderColor={'cyan.400'}
              bgColor={'gray.900'}
              variant={'filled'}
              _hover={{
                bgColor: 'gray.900'
              }}
              size={'lg'}
            />
          </FormControl>
        </Stack>

        <Button
           type="submit"
           mt="6"
           colorScheme={'cyan'}
           color={'gray.200'}
           size="lg"
        >
          Entrar
        </Button>


      </Flex>
    </Flex>
  )
}
