import { Button, Card, Flex, Input, Stack } from "@chakra-ui/react";
import { Field } from "./components/ui/field";

function App() {
  return (
    <Flex flex={'flex'} justify={'center'} alignItems={'center'} margin={'auto'} height={'100vb'}>
      <Card.Root width={'460px'}>
        <Card.Header>
          <Card.Title>Sign up</Card.Title>
          <Card.Description>
            Fill in the form below to create an account
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field label="First name">
              <Input placeholder="First name" />
            </Field>
            <Field label="First name">
              <Input placeholder="Last name" />
            </Field>
            <Field label="Email">
              <Input placeholder="Me@example.com" />
            </Field>
            <Field label="Password">
              <Input placeholder="Password" />
            </Field>
            <Field label="Confirm Passowrd">
              <Input placeholder="Confirm passowrd" />
            </Field>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">Cancel</Button>
          <Button variant="solid">Sign in</Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
}

export default App;
