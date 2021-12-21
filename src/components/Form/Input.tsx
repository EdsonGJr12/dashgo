import { FormControl, FormErrorMessage, FormLabel, Input as ChackaraInput, InputProps as ChackraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChackraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
    = ({ name, label, error, ...rest }, ref) => {

    return (
        <FormControl
            isInvalid={!!error}
        >
            { label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChackaraInput 
                name={name}
                id={name}
                focusBorderColor={'cyan.400'}
                bgColor={'gray.900'}
                variant={'filled'}
                _hover={{
                    bgColor: 'gray.900'
                }}
                size={'lg'}
                ref={ref}
                {...rest}
            />
            {
                !!error &&
                <FormErrorMessage>{error.message}</FormErrorMessage>
            }
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)