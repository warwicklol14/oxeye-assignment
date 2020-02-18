import React from "react"
import { graphql } from "gatsby"
import {Text, SimpleGrid} from "@chakra-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TeamListQueryQuery } from "../../types/graphql-types"
import MemberCard from "../components/membercard"

interface TeamMemersPageProps {
    data:TeamListQueryQuery
}

const TeamMemersPage = ({data}:TeamMemersPageProps) => {
    const {allMarkdownRemark:{nodes}} = data;
    return (<Layout>
        <SEO title="List of the team members" />
        <Text as="h2" fontSize="2xl" color="white">Meet our magnificent team</Text>
        <SimpleGrid columns={[1,1,2,3]} spacingY={[1,2,2,4]} mt={4} spacingX={4}>
            {nodes.map(node => (
                <MemberCard name={node.frontmatter?.name ?? ""}
                    avatar_link={node.frontmatter?.avatar_link ?? ""}
                    roles={node.frontmatter?.roles ?? ""}
                    path={node.frontmatter?.path ?? ""}
                    bio={node.html ?? ""}
                >
                </MemberCard>
            ))}
        </SimpleGrid>

    </Layout>);
}

export const teamListQuery = graphql`
    query teamListQuery {
        allMarkdownRemark {
            nodes {
              frontmatter {
                avatar_link
                name
                path
                roles
                title
              }
              html
            }
        }
    }
`

export default TeamMemersPage
