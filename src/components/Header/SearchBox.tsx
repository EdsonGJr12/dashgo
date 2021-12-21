import { useRef, useState } from "react";
import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

    // const [search, setSearch] = useState('');

    // console.log(search)

    const searchInputRef = useRef<HTMLInputElement>(null);

    // console.log(searchInputRef.current.value);

    return (
        <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            // mt="6"
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
                ref={searchInputRef}
            />

            <Icon as={RiSearchLine} fontSize="20" />

        </Flex>
    )

}