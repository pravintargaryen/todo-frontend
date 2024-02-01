import * as React from "react";
import Container from "./Container";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Container />
    </ChakraProvider>
  );
}

export default App;
