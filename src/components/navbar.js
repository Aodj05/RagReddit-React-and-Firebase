import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import AddNewPost from "./add-new-post";

const Navbar = () => {
    return (
        <Box position="sticky" top={0} p={4} bg="orange.100" z-index={1}>
          <Container maxw="md" centerContent>
            <Flex justifyContent="flex-end" w="100%" position="sticky" top={0}>
              <AddNewPost />
            </Flex>
          </Container>
        </Box>
    );
};

export default Navbar;