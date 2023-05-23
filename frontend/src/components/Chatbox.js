import React from "react";
import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import SingleChat from "./SingleChat";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {

    const { selectedChat } = ChatState();
    return (
        <Box
            display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
            alignItems="center"
            flexDirection="column"
            padding={3}
            background="white"
            width={{ base: "100%", md: "68%" }}
            borderRadius="lg"
            borderWidth="1px"
            height="80vh"
        >
            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        </Box>
    );
}


export default Chatbox;