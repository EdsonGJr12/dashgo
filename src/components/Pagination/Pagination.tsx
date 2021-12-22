import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCount: number;
    totalPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const sibilingsCount = 1;

function generatePagesArray(from: number, to: number){
    return [...new Array(to - from)]
        .map((_, index) => from + index + 1)
        .filter(page => page > 0)
}

export function Pagination({ 
    totalCount, 
    totalPerPage = 10, 
    currentPage = 1, 
    onPageChange }: PaginationProps) {

    const lastPage = Math.floor(totalCount / totalPerPage);

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - sibilingsCount, currentPage - 1)
        : [];
    
        console.log(previousPages)

    const nextPages = currentPage < lastPage 
        ? generatePagesArray(currentPage, Math.min(currentPage + sibilingsCount, lastPage))
        : [];

        console.log(nextPages)


    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            spacing="6"
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack
                 spacing="2"
            >
                {currentPage > (1 + sibilingsCount) && (
                   <>
                        <PaginationItem number={1} onPageChange={onPageChange} />
                        { currentPage > (2 + sibilingsCount) && <Text>...</Text>}
                   </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return (
                        <PaginationItem 
                            key={currentPage}
                            number={page} 
                            onPageChange={onPageChange}
                        />
                    )
                })}
               
                <PaginationItem 
                    number={currentPage}
                    onPageChange={onPageChange}
                    isCurrent
                />

                {nextPages.length > 0 && nextPages.map(page => {
                    return (
                        <PaginationItem 
                            key={currentPage}
                            number={page} 
                            onPageChange={onPageChange}
                        />
                    )
                })}

                {(currentPage + sibilingsCount) < lastPage && (
                    <>  
                    {(currentPage + 1 + sibilingsCount) < lastPage && <Text>...</Text>}
                        <PaginationItem number={lastPage} onPageChange={onPageChange} />
                    </>
                )}
                
                
            </HStack>
        </Stack>
    )
}