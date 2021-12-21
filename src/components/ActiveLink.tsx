import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) { 

    const { asPath } = useRouter();

    let isActive = false;

    if(asPath === rest.href.toString() || asPath === rest.as.toString()){
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'cyan.400' : 'gray.50'
            })}
        </Link>
    )
}