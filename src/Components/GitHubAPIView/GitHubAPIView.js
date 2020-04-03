import React from 'react';
import RepoListView from '../RepoListView/RepoListView';
import { sortedLangs, langsFilter } from '../../Services/GitHubAPIService'
import PieChart from 'react-minimal-pie-chart';
import styled from 'styled-components';

const GitBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    `

const GitView = styled.div`
    display: flex;
    flex-direction: column;
`

const ColTitle = styled.div`
    font-size: 2em;
    font-weight: bold;
`

const ObjectTitle = styled.div`
    font-size: 1em;
    
`

const TotalPieView = styled.div`
    margin: 1em 0 1em 0;
`

class GitHubAPIView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitData: [],
            langs: [],
            mappedLangs: {}
        };
    }
    
    componentDidMount() {
        fetch('https://api.github.com/users/sindridan/repos')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    gitData: result,
                    langs: result.map(function(el)  {return el.language}).filter(Boolean),
                    mappedLangs: sortedLangs(langsFilter(result))
                })
            }
        )
    }

    mapLangs(langs)
    {
        var counts = {}
        for (var i = 0; i < langs.length; i++) {
            counts[langs[i]] = (counts[langs[i]] + 1) || 1;
        }
        //const langsMappedArr = Object.keys(counts).map(i => counts[i])
        //console.log(langsMappedArr)
        var arr = Object.entries(counts)
        return arr
    }

    render() {
        const { gitData, langs, mappedLangs } = this.state;
        //console.log(this.mapLangs(langs))
        //console.log(JSON.stringify(this.mapLangs(langs))) 
        return (
        
            <GitBodyContainer>
                <GitView>
                    <ColTitle>My GitHub repositories</ColTitle>
                    <RepoListView id="main-repo-list" list={ gitData } />
                </GitView>

                <GitView>
                    <ColTitle>Repository statistics</ColTitle>
                    <TotalPieView>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/45%25_pie_chart.svg/600px-45%25_pie_chart.svg.png" alt="just a dummy pie chart"/>
                    </TotalPieView>
                </GitView>
            </GitBodyContainer>
            
    )}
};

export default GitHubAPIView;
