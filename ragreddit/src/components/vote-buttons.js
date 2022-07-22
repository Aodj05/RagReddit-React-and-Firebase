import { IconButton, Text, VStack } from "@chakra-ui/core";
import React, { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import fire from "../lib/firebase";

const VoteButtons = ({ post }) => {
    const handleClick = async (type) => {
        //calculation to save vote
        let upVotesCount = post.upVotesCount;
        let downVotesCount = post.downVotesCount;

        const date = new Date();

        if (type === "upvote") {
            upVotesCount = upVotesCount + 1;
        } else {
            downVotesCount = downVotesCount + 1;
        }

        await fire.firestore().collection("posts").doc(post.id).set({
            title: post.title,
            upVotesCount,
            downVotesCount,
            createdAt: post.createdAt,
            updatedAt: date.toUTCString(),
        });
    };

    return (
        <>
          <VStack>
            <IconButton
              size="lg"
              colorScheme="orange"
              aria-label="Upvote"
              icon={<FiArrowUp />}
              onClick={() => handleClick("upvote")}
            />
            <Text bg="yellow.100" rounded="md" w="100%" p={1}>
              {post.upVotesCount}
            </Text>
          </VStack>
          <VStack>
            <IconButton
              size="lg"
              colorScheme="red"
              aria-label="Downvote"
              icon={<FiArrowDown />}
              onClick={() => handleClick("downvote")}
            />
            <Text bg="yellow.100" rounded="md" w="100%" p={1}>
              {post.upVotesCount}
            </Text>
          </VStack>
        </>
    );
};

export default VoteButtons;