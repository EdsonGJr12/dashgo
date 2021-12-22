import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, IconButton, Spinner } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";



export default function UserList() {

    const [page, setPage] = useState(1);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })


    const { data, isLoading, isFetching, error } = useUsers(page);

    console.log("data: " + data)
    
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
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size="sm" ml="4" />}
                        </Heading>
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

                    {
                        isLoading ? (
                            <Flex justify="center">
                                <Spinner />
                            </Flex>
                        ) : error ? (
                            <Flex justify="center">
                                <Text>Falha ao obter dados do usuário</Text>
                            </Flex>
                        ) : (
                            <>
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
                                        {data.users.map(user => {
                                            return (
                                                <Tr key={user.id}>
                                                    <Td px={["4","4", "6"]}>
                                                        <Checkbox colorScheme='cyan' />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight="bold">{user.name}</Text>
                                                            <Text fontSize="small" color="gray.300">{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                {
                                                    isWideVersion &&
                                                    <Td>
                                                        {
                                                            new Intl.DateTimeFormat('pt-BR', {
                                                                day: 'numeric',
                                                                month: 'long',
                                                                year: 'numeric'
                                                            })
                                                                .format(new Date(user.createdAt))
                                                        }
                                                    </Td>
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
                                            )
                                        })}
                                        
                                    </Tbody>


                                </Table>
                                <Pagination 
                                    totalCount={data.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                        ) 
                    }

                </Box>

            </Flex>
        </Box>
    )
}