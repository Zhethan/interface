// App.tsx
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "../theme";
import Layout from "./Layout";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import "@fontsource/inter";
import styles from  "../styles/Home.module.css"

export default function Header() {
  // Pull the disclosure methods
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>  
      <div className = {styles.header}>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
        </div>
    </ChakraProvider>
    
  );
}
