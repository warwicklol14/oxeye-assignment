import React from "react"
import { Stack, Avatar,Text } from "@chakra-ui/core";
import { Link } from "gatsby";

interface MemberCardProps extends React.Props<MemberCardProps> {
    avatar_link:string;
    name:string;
    path:string;
    roles:string;
    bio:string;
}

const MemberCard = (props:MemberCardProps) => {
    return(
        <Stack bg="white" borderRadius={4} boxShadow="lg" width="fit-content" p={4}>
            <Avatar name={props.name} size="xl" src={props.avatar_link} backgroundColor=""></Avatar>
            <Stack spacing={4}>
                <Text as="h2" fontSize="xl" fontWeight="bold">{props.name}</Text>
                <Text as="h3" fontSize="md">{props.roles}</Text>
                <Text as="p" fontWeight="light">{props.bio.slice(3,20)}..</Text>
                <Link to={props.path}>Read more</Link>
            </Stack>
        </Stack>
    )
}

export default MemberCard;