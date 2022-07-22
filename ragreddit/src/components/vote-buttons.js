import { IconButton, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import fire from "../lib/firebase";

const VoteButtons = ({ post }) => {
    const [isVoting, setVoting] = useState(false);
    const [votedPosts, setVotedPosts] = useState([]);

    useEffect(() => {
        //fetch already voted items
        const votesFromLocalStorage = localStorage.getItem("votes") || [];
        let previousVotes = [];

        try {
            //parse value of item from localstorage
            //if items not an array throw error
            previousVotes = JSON.parse(votesFromLocalStorage);
        } catch (error) {
            console.error(error);
        }
        setVotedPosts(previousVotes);
    }, []);

    const handleDisablingOfVoting = (postId) => {
        //disable voting after user has voted. Fetch previous voted item from localstorage
        //update item on localstorage
        const previousVotes = votedPosts;
        previousVotes.push(postId);

        setVotedPosts(previousVotes);
        //update voted item from localstorage
        localStorage.setItem("votes", JSON.stringify(votedPosts));
    };

    const handleClick = async (type) => {
        setVoting(true);
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

        //disable vote button once vote successful
        handleDisablingOfVoting(post.id);

        setVoting(false);
    };

    const checkIfPostIsAlreadyVoted = () => {
        if (votedPosts.indexOf(post.id) > -1) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
          <VStack>
            <IconButton
              size="lg"
              colorScheme="green"
              aria-label="Upvote"
              icon={<FiArrowUp />}
              onClick={() => handleClick("upvote")}
              isLoading={isVoting}
              isDisabled={checkIfPostIsAlreadyVoted()}
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
              isLoading={isVoting}
              isDisabled={checkIfPostIsAlreadyVoted()}
            />
            <Text bg="yellow.100" rounded="md" w="100%" p={1}>
              {post.upVotesCount}
            </Text>
          </VStack>
        </>
    );
};

export default VoteButtons;