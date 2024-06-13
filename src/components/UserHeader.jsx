import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom"

const UserHeader = () => {
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
                <Flex gap={4} alignItems={'center'}>
                    <BsInstagram size={24} cursor={'pointer'} />
                    <BsFacebook size={24} cursor={'pointer'} />
                </Flex>
            </Flex>
        </VStack>
    )
}

export default UserHeader