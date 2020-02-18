const path = require('path');

exports.createPages = ({actions,graphql}) => {
    const {createPage} = actions;

    const memberTemplate = path.resolve('src/templates/teammember.tsx');

    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                        name
                        roles
                    }
                }
            }
        }
    }`).then(res => {
        if(res.errors)
            return Promise.reject(res.errors);
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path:node.frontmatter.path,
                component:memberTemplate
            })
        });
    })

}