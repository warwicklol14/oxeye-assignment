import React from "react";
import {Text, Avatar, Stack} from "@chakra-ui/core";
import { SocialIcon } from 'react-social-icons';


interface MemberDetailsProps extends React.Props<MemberDetailsProps> {
    name:string;
    roles:string;
    avatar_link:string;
}

const MemberDetails = ({name,roles,avatar_link}:MemberDetailsProps) => {
    return (
        <Stack isInline spacing={4}>
            <Avatar name={name} size="2xl" src={avatar_link} backgroundColor=""></Avatar>
            <Stack>
                <Text as="h3" color="white" fontSize="2xl" fontWeight="bold">{name}</Text>
                <Text color="white">{roles}</Text>
                <Stack isInline spacing={8}>
                    <SocialIcon url= "https://linkedin.com"></SocialIcon>
                    <SocialIcon url= "https://facebook.com"></SocialIcon>
                    <SocialIcon url= "https://twitter.com"></SocialIcon>
                    <SocialIcon url= "https://whatsapp.com"></SocialIcon>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default MemberDetails;