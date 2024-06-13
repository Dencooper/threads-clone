import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import { Link } from "react-router-dom"

const UserHeader = () => {
    const toast = useToast();
    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: 'URL copied.',
                description: "Profile link copied",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        });
    }
    return (
        <VStack gap={4} alignItems={'start'}>
            <Flex justifyContent={"space-between"} w={"full"}>
                <Box>
                    <Text fontSize={"2x1"} >Mark Zuckerberg</Text>
                    <Flex gap={2} alignItems={'center'}>
                        <Text fontSize={"sm"}>markzuckerg</Text>
                        <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>markzuckerg123</Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar
                        name="Mark Zuckerberg"
                        src="/zuck-avatar.png"
                        size={"xl"} />
                </Box>
            </Flex>

            <Text>Co-founder, executive chairman and CEO of Meta Platform.</Text>

            <Flex justifyContent={'space-between'} w={'full'}>
                <Flex gap={2} alignItems={'center'}>
                    <Text color={'gray.light'}>3.2M followers</Text>
                    <Box w={1} h={1} bg={'gray.light'} borderRadius={'full'}></Box>
                    <Link style={{ color: '#616161' }}>instagram.com</Link>
                </Flex>
                <Flex>
                    <Box className="icon-container">
                        <BsInstagram size={24} cursor={'pointer'} />
                    </Box>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={'pointer'} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={"gray.dark"}>
                                    <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy link</MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>

            <Flex w={"full"}>
                <Flex flex={1} borderBottom={"1.5px solid white"} pb="3" justifyContent={"center"} cursor={"pointer"}>
                    <Text fontWeight={"bold"}>Threads</Text>
                </Flex>
                <Flex flex={1} borderBottom={"1px solid gray"} pb="3" color={"gray.light"} justifyContent={"center"} cursor={"pointer"}>
                    <Text fontWeight={"bold"}>Replies</Text>
                </Flex>
                <Flex flex={1} borderBottom={"1px solid gray"} pb="3" color={"gray.light"} justifyContent={"center"} cursor={"pointer"}>
                    <Text fontWeight={"bold"}>Reports</Text>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default UserHeader