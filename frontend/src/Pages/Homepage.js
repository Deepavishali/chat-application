import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Text, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import  Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

export default function Homepage() {
    const navigate = useNavigate();

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if(user) navigate("/chats")
    },[navigate])

    return (
        <Container maxW="xl" centerContent>
            <Box
                display="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text fontSize="4xl" fontFamily="Work sans" textAlign="center">
                    Talk-A-Tive
                </Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs variant='soft-rounded'>
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">SignUp</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        <TabPanel>
                            <Signup/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}