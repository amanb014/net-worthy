import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { FormEvent, FormEventHandler } from "react";

export const AddEditAccount: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <Box maxWidth={600} margin="auto">
      <Heading marginBottom={3}>Add New Account</Heading>

      <form onSubmit={handleSubmit}>
        <FormControl id="accountName" isRequired>
          <FormLabel margin={"0.5rem 0 0 0"}>Account Name</FormLabel>
          <Input colorScheme="purple" placeholder="US Dollar" />
        </FormControl>

        <FormControl id="currency" isRequired>
          <FormLabel margin={"0.5rem 0 0 0"}>Currency</FormLabel>
          <Select defaultValue="USD" placeholder="Select option">
            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </Select>
        </FormControl>

        <FormControl id="country">
          <FormLabel margin={"0.5rem 0 0 0"}>Country</FormLabel>
          <Select placeholder="Select option">
            <option value="USA">United States of America</option>
            <option value="CA">Canada</option>
          </Select>
        </FormControl>

        <FormControl id="linkText">
          <FormLabel margin={"0.5rem 0 0 0"}>Link Text</FormLabel>
          <Input placeholder="Login Link" defaultValue="Login" />
        </FormControl>

        <FormControl id="link">
          <FormLabel margin={"0.5rem 0 0 0"}>Link</FormLabel>
          <Input placeholder="https://" />
        </FormControl>

        <Flex direction={"row-reverse"} marginTop={2}>
          <Button type="submit" marginLeft={2}>
            Save & Close
          </Button>
          <Button type="submit" variant={"outline"}>
            Save & Add Another
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
