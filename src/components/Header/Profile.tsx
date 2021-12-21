import { Avatar, Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {

    return (
        <Flex
            align="center"
        >
            {
                showProfileData &&
                <Box mr="4" textAlign="right">
                    <Text>Edson Junior</Text>
                    <Text 
                        color="gray.300"
                        fontSize="small"
                    >
                        edson12.j@hotmail.com
                    </Text>
                </Box>
            }

            <Avatar 
                size="md" 
                name="Edson Junior"
                src="https://avatars.githubusercontent.com/u/76176976?s=96&v=4"
            />

        </Flex>
    )
}