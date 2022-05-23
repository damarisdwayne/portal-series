import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldErrors } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldErrors;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor='email' color='gray.900'>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        color='gray.900'
        focusBorderColor="pink.500"
        box-shadow='0px 2px 4px rgba(9, 132, 227, 0.05)'
        _hover={{
          background: '#fff'
        }}
        borderColor='pink.500'
        bgColor='white'
        variant="filled"
        size="lg"
        {...rest}
        ref={ref}
      />

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);