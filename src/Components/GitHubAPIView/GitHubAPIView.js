import React from 'react';
import RepoListView from '../RepoListView/RepoListView';
import { sortedLangs, langsFilter } from '../../Services/GitHubAPIService'
//import PieChart from 'react-minimal-pie-chart';
import ReactApexChart from "react-apexcharts";

import styled from 'styled-components';

const GitBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    `

const GitViewRepos = styled.div`
    display: flex;
    flex-direction: column;
`

const GitViewInfographics = styled.div`
    display: flex;
    flex-direction: row;
`

const GitParagraph = styled.div`
    font-size: 1em;
    font-style: italic;

    a, Link {
        font-size: 1em;
        text-decoration: none; 
        
        color: #b6b7b7;
    }

    a:visited { text-decoration: none; #b6b7b7; }

    a:hover, a:active { text-decoration: none; 
        -moz-transition: all .2s ease-in;
        -o-transition: all .2s ease-in;
        -webkit-transition: all .2s ease-in;
        transition: all .2s ease-in;
        color: #454545; }
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
    .apexcharts-legend-text {
        font-size: 1em !important;
        color: #b6b7b7 !important;
    }
`

const TotalStatisticsView = styled.div`
    margin: 1em 0 1em 0;
`

class GitHubAPIView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitData: [],
            langs: [],
            mappedLangs: {},

            series: [],
            options: {
              chart: {
                width: 600,
                type: 'pie',
              },
              labels: [],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }
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
                    mappedLangs: sortedLangs(langsFilter(result)),
                })
                this.mapLangs(this.state.langs)
            }
        )
        
    }

    mapLangs(langs)
    {
        var counts = {}
        for (var i = 0; i < langs.length; i++) {
            counts[langs[i]] = (counts[langs[i]] + 1) || 1;
        }
        var arr = Object.entries(counts)

        // dirty fix to isolate languages and counts of them into seperate lists for state
        var countsList = []
        var langsList = []

        for(var i = 0; i < arr.length; i++)
        {
            langsList.push(arr[i][0])
            countsList.push(arr[i][1])
            
        }
        this.setState({series: countsList, options: {...this.state.options, labels: langsList}})

    }

    totalCommitsView()
    {
        //console.log("repo commits: ", this.state.gitData)
        
    }

    render() {
        const { gitData, langs, mappedLangs, series, options } = this.state;
        this.totalCommitsView()
        return (
            <GitBodyContainer>
                <ColTitle>Repository statistics</ColTitle>
                <GitViewInfographics>
                    <TotalPieView>
                        <GitParagraph>
                            This pie graph, provided by <a href="https://apexcharts.com/">ApexCharts</a>, shows the collection of the programming languages from your repository. Each slice denotes a programming language and its prevalence in my throughout my public repositories.
                        </GitParagraph>
                        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={600} />
                    </TotalPieView>
                    <TotalStatisticsView>
                        <GitParagraph>
                            Below is a collection of statistics related to all the repositories as a whole. 
                        </GitParagraph>

                    </TotalStatisticsView>
                </GitViewInfographics>
                
                <ColTitle>My public GitHub repositories</ColTitle>
                <GitViewRepos>
                    <GitParagraph>
                            This collection of repositories below can be found and displayed using the GitHub API available for any user. To see the raw data, checkout: <a href="https://api.github.com/users/sindridan/repos">https://api.github.com/users/sindridan/repos</a>.
                    </GitParagraph>
                    <RepoListView id="main-repo-list" list={ gitData } />
                </GitViewRepos>
            </GitBodyContainer>
            
    )}
};

export default GitHubAPIView;
