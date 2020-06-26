import React from 'react';
import RepoViewItem from '../RepoViewItem/RepoViewItem';
import styled from 'styled-components';


const GitItemsUL = styled.ul`
    list-style-type: none;
    -webkit-padding-start: 0;
    padding-left: 0;
    display: flex;
    flex-direction row;
    flex-wrap: wrap;
    justify-content: space-between;
`



const RepoListView = (props) => {
    if(props) {
        return (
            <GitItemsUL>
                { props.list.map(repo => <RepoViewItem key={ repo.id } repoItem={ repo } />) }
            </GitItemsUL>
        );    
    } else { return (<div><h1>No public repositories found</h1></div>) }
        
};

export default RepoListView;