import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean;
    number: number;
    onPageChange: (page: number) => void;
}
export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {

    if(isCurrent){
        return (
            <Button 
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="cyan"
                disabled
                _disabled={{
                    bgColor: 'cyan.500',
                    color: 'gray.100',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button 
            size="sm"
            fontSize="xs"
            w="4"
            bg="gray.700"
            _hover={{
                bg: "gray.500"
            }}
            onClick={() => onPageChange(number)}
        >
           {number}
        </Button>
    )

}