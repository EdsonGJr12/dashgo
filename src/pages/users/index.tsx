import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, IconButton } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";

export default function UserList() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />
            <Flex
                w="100%" 
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />
                
                <Box
                    flex="1"
                    borderRadius="8"
                    bg="gray.800"
                    p="8"
                >
                    <Flex
                        mb="8"
                        justify="space-between"
                        align="center"
                    >
                        <Heading size="large" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                            {
                                isWideVersion ? (
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="cyan"
                                        color="gray.100"
                                        fontWeight="bold"
                                        leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                                    >
                                        Criar novo
                                    </Button>
                                ):(
                                    <IconButton
                                        aria-label="Criar"
                                        icon={<Icon as={RiAddLine} fontSize="16"/>}
                                        colorScheme="cyan"
                                        color="gray.100"
                                        fontWeight="bold"
                                    /> 
                                )
                            }
                        </Link>

                    </Flex>

                    <Table
                        colorScheme="whiteAlpha"
                    >
                        <Thead>
                            <Tr>
                                <Th px={["4","4", "6"]} color="gray.300" w="8">
                                    <Checkbox colorScheme='cyan' />
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                {
                                    isWideVersion &&
                                    <Th>
                                        Data de cadastro
                                    </Th>
                                }
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px={["4","4", "6"]}>
                                    <Checkbox colorScheme='cyan' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Edson Junior</Text>
                                        <Text fontSize="small" color="gray.300">edson12.j@hotmail.com</Text>
                                    </Box>
                                </Td>
                               {
                                   isWideVersion &&
                                   <Td>04 de abril de 2021</Td>
                               }
                                <Td>
                                   {
                                       isWideVersion ? (

                                        <Button
                                                as="a"
                                                size="sm"
                                                fontSize="sm"
                                                colorScheme="orange"
                                                color="gray.100"
                                                fontWeight="bold"
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                            >
                                                Editar
                                        </Button>

                                       ):(
                                           <IconButton
                                                aria-label="Editar"
                                                icon={<Icon as={RiPencilLine} fontSize="16"/>}
                                                colorScheme="orange"
                                                color="gray.100"
                                                fontWeight="bold"
                                           />
                                       )
                                   }
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4","4", "6"]}>
                                    <Checkbox colorScheme='cyan' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Edson Junior</Text>
                                        <Text fontSize="small" color="gray.300">edson12.j@hotmail.com</Text>
                                    </Box>
                                </Td>
                               {
                                   isWideVersion &&
                                   <Td>04 de abril de 2021</Td>
                               }
                                <Td>
                                    {
                                       isWideVersion ? (

                                        <Button
                                                as="a"
                                                size="sm"
                                                fontSize="sm"
                                                colorScheme="orange"
                                                color="gray.100"
                                                fontWeight="bold"
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                            >
                                                Editar
                                        </Button>

                                       ):(
                                           <IconButton
                                                aria-label="Editar"
                                                icon={<Icon as={RiPencilLine} fontSize="16"/>}
                                                colorScheme="orange"
                                                color="gray.100"
                                                fontWeight="bold"
                                           />
                                       )
                                   }
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px={["4","4", "6"]}>
                                    <Checkbox colorScheme='cyan' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Edson Junior</Text>
                                        <Text fontSize="small" color="gray.300">edson12.j@hotmail.com</Text>
                                    </Box>
                                </Td>
                                {
                                    isWideVersion &&
                                    <Td>04 de abril de 2021</Td>
                                }
                                <Td>
                                    {
                                       isWideVersion ? (

                                        <Button
                                                as="a"
                                                size="sm"
                                                fontSize="sm"
                                                colorScheme="orange"
                                                color="gray.100"
                                                fontWeight="bold"
                                                leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                            >
                                                Editar
                                        </Button>

                                       ):(
                                           <IconButton
                                                aria-label="Editar"
                                                icon={<Icon as={RiPencilLine} fontSize="16"/>}
                                                colorScheme="orange"
                                                color="gray.100"
                                                fontWeight="bold"
                                           />
                                       )
                                   }
                                </Td>
                            </Tr>
                        </Tbody>


                    </Table>
                    <Pagination />

                </Box>

            </Flex>
        </Box>
    )
}