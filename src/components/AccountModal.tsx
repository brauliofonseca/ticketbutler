import {
    Box,
    Button,
    Flex,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text
} from "@chakra-ui/react"
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons"
import { useEthers } from "@usedapp/core"
import Identicon from "./Identicon"

const AccountModal = ({isOpen, onClose}) => {
    const { account, deactivate } = useEthers()

    const handleDeactivateAccount = () => {
        deactivate();
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay/>
            <ModalContent
                background="green.200"
                border="3px"
                borderStyle="solid"
                borderColor="green.700"
                borderRadius="3xl"
            >
                <ModalHeader
                    color="white"
                    px={4}
                    fontSize="x-large"
                    fontWeight="bold"
                >
                    Account
                </ModalHeader>
                <ModalCloseButton
                    color="white"
                    fontSize="sm"
                    _hover={{
                        color: "whiteAlpha.700"
                    }}
                />
                <ModalBody
                    pt={0}
                    px={4}
                >
                    <Box
                        background="red.200"
                        borderRadius="3xl"
                        border="2px"
                        borderStyle="solid"
                        borderColor="red.700"
                        px={5}
                        pt={4}
                        pb={2}
                        mb={3}
                    >
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            mb={3}
                        >
                            <Text color="whiteAlpha.900" fontSize="normal">
                                Connected with MetaMask
                            </Text>
                            <Button
                                onClick={handleDeactivateAccount}
                                variant="outline"
                                size="sm"
                                background="red.600"
                                borderColor="red.800"
                                borderRadius="3xl"
                                color="white"
                                fontSize="15px"
                                fontWeight="bold"
                                px={5}
                                height="40px"
                                _hover={{
                                    background: "red.900",
                                    borderColor: "blue.300",
                                    textDecoration: "underline"
                                }}
                            >
                               Disconnect 
                            </Button>
                        </Flex>
                        <Flex 
                            alignItems="center"
                            mt={2}
                            mb={4}
                            lineHeight={1}
                        >
                            <Text
                                color="white"
                                fontSize="xl"
                                fontWeight="semibold"
                                ml="2"
                                lineHeight="1.1"
                            >
                                {account &&
                                `${account.slice(0, 6)}...${account.slice(
                                    account.length - 4,
                                    account.length
                                )}`}
                            </Text>
                        </Flex>
                        <Flex 
                            alignContent="center"
                            m={3}
                        >
                            <Button
                                variant="link"
                                color="whiteAlpha.900"
                                fontWeight="bold"
                                fontSize="normal"
                                _hover={{
                                    textDecoration: "none",
                                    color: "whiteAlpha.800",
                                }}
                            >
                                <CopyIcon mr={1} />
                                Copy Address
                            </Button>
                            <Link
                                fontWeight="bold"
                                fontSize="normal"
                                display="flex"
                                alignItems="center"
                                href={`https://rinkeby.etherscan.io/address/${account}`}
                                isExternal
                                color="whiteAlpha.900"
                                ml={6}
                                _hover={{
                                    color: "whiteAlpha.800",
                                    textDecoration: "underline",
                                }}
                            >
                                <ExternalLinkIcon mr={1} />
                                View on Explorer
                            </Link>
                        </Flex>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default AccountModal

