import { Icon, Text, Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";
import { ElementType } from "react";

export interface NavLinkProps extends LinkProps {
    icon: ElementType;
    title: string;
    href: string;
}

export function NavLink({ icon, title, href, ...rest } : NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink 
                display="flex" 
                align="center" 
                color="cyan.400"
                {...rest}
                >
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{title}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}