import { Flex, Input, Text, Icon, HStack, Box, Avatar} from "@chakra-ui/react";

import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            alignItems="center"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacings="tight"
                w="64"
            >
                DashGo
                <Text as="span" color="pink.500" ml="1">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                mt="6"
                maxWidth={400}
                alignSelf="center"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input 
                    color="green.50"
                    variant="unstyled"
                    px="4"
                    mg="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{
                        color: "gray.400"
                    }}
                />

                <Icon as={RiSearchLine} fontSize="20" />

            </Flex>


            <Flex
                align="center"
                ml="auto"
            >
                <HStack 
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

                <Flex
                    align="center"
                >
                    <Box mr="4" textAlign="right">
                        <Text>Edson Junior</Text>
                        <Text 
                            color="gray.300"
                            fontSize="small"
                        >
                            edson12.j@hotmail.com
                        </Text>
                    </Box>

                    <Avatar 
                        size="md" 
                        name="Edson Junior"
                        src="https://avatars.githubusercontent.com/u/76176976?s=96&v=4"
                    />


                </Flex>

            </Flex>
            
        </Flex>
    )
}