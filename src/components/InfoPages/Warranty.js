import React from 'react';
import styled from 'styled-components';
import Query from 'react-apollo/Query'
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import PageWrapper from "../public/PageWrapper";
import ReactGA from 'react-ga';
import MetaTags from "react-meta-tags";

export default class Warranty extends React.Component {

    componentWillMount() {
        ReactGA.pageview(location.pathname);
        window.scrollTo(0,0);
    }

    render() {
        return(
            <PageWrapper>
                <MetaTags>
                    <title>Гарантия</title>
                </MetaTags>
                <Content>
                    <Query query={gql`
                   query {
                    warranties{   
                        text
                      }
                    } 
                `}>
                        {({loading, error, data})=> {
                            if (loading) return <p/>
                            if (error) return <p>Error :)</p>
                            return <ReactMarkdown source={data.warranties[0].text}/>
                        }}
                    </Query>
                </Content>
            </PageWrapper>
        )
    }
}


const Content = styled.div`
    max-width: 100%;
    overflow-x: hidden;
    padding: 10px;
    display: block;
    
    *{
        display: block;
    }
    
    a {
        display: inline-block;
    }
    
    img {
        max-width: 100%;
        object-fit: contain;
        margin: auto;
        margin-bottom: 20px;
    }
    
    p {
        font-size: 12pt;
        text-align: justify;
        letter-spacing: 0px;
        line-height: 140%;
    }
    
    em{
        margin-bottom: 10px;
    }
    
    h1,h2,h3,h4,h5,h6 {
        text-align: center;
    }
    
    li {
        display: list-item; 
        line-height: 140%;
    }
`;