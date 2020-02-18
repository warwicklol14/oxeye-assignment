import React from "react"
import {Text, Stack, Icon} from "@chakra-ui/core"
import { graphql, Link } from "gatsby";
import Layout from "../components/layout"
import {MemberQueryByPathQuery} from "../../types/graphql-types"
import MemberDetails from "../components/memberdetails";

interface TemplateProps {
    data: MemberQueryByPathQuery
}

export default function Template({data}:TemplateProps) {
    const {markdownRemark} = data;
    return (
        <Layout>
            <Stack mt={10}>
                <MemberDetails
                name={markdownRemark?.frontmatter?.name ?? ""} 
                roles={markdownRemark?.frontmatter?.roles ?? ""}
                avatar_link={markdownRemark?.frontmatter?.avatar_link ?? ""}
                >
                </MemberDetails>
                <Text mt={5} as="h4" color="white" fontSize="xl" fontWeight="semibold">Bio</Text>
                <Text color="white" dangerouslySetInnerHTML={{__html: markdownRemark?.html ?? ""} }></Text>
                <Link to="/teammembers"><Icon size="2em" color="white" name="arrow-back"></Icon></Link>
            </Stack>
        </Layout>
    )
}

export const memberQuery = graphql`
    query memberQueryByPath($path:String) {
        markdownRemark(frontmatter: {path : {eq : $path}}) {
            html
            frontmatter {
                title
                name
                roles
                avatar_link
            }
        }
    }
`