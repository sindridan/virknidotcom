import React from 'react';
import RepoListView from '../RepoListView/RepoListView'
import { sortedLangs, langsFilter } from '../../Services/GitHubAPIService'
//import TotalStatistics from '../TotalStatistics/TotalStatistics' //TODO: needs a component for view next to piebar
//import PieChart from 'react-minimal-pie-chart';
import ReactApexChart from 'react-apexcharts'
import axios from 'axios'

import styled from 'styled-components';
import { parse } from '@babel/core';

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

const FPForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
`

const InputBox = styled.input`
    font-size: 2em;
    font-weight: bold;
    border: none

    :focus::placeholder {
        color: transparent;
    }

    min-width: 250px
    padding-left: 5px
    outline: none

    flex-grow: 1;

    background: #454545;
    color: #b6b7b7;

    border-radius: 0.2em;
    margin: 0.5em 0 0.5em 0;

    -webkit-box-shadow: 0 8px 6px -6px black;
        -moz-box-shadow: 0 8px 6px -6px black;
            box-shadow: 0 8px 6px -6px black;
            
    max-width: 100%;
    max-height: auto;

`

const SubmitButton = styled.input`
`


class GitHubAPIView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitUserURL: "https://api.github.com/users/sindridan",
            gitUserReposURL: "https://api.github.com/users/sindridan/repos",
            gitUser: "sindridan",
            gitUserFullName: "Sindri Dan Garðarsson",
            gitData: [],
            totalStatsList: {},
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    componentDidMount() {
        fetch(this.state.gitUserReposURL)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    gitData: result,
                    //totalStatsList: this.totalStatsCalc(result),
                    langs: result.map(function(el)  {return el.language}).filter(Boolean),
                    mappedLangs: sortedLangs(langsFilter(result)),
                })
                this.mapLangs(this.state.langs)
                this.totalStatsCalc(result)
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

    getAllData(URLs){
        return Promise.all(URLs.map(this.fetchData));
      }
      
    fetchData(URL) {
    return axios
        .get(URL)
        .then(function(response) {
        return {
            success: true,
            data: response.data
        };
        })
        .catch(function(error) {
        return { success: false };
        });
    }

    githubAPIParser(data)
    {
        console.log(data)
        // get all contributors in url
        var contributorsURL = []
        for(var i = 0; i < data.length; i++)
        {
            contributorsURL.push(data[i].contributors_url)
        }
        console.log(contributorsURL)
        var contributors = []
    
        this.getAllData(contributorsURL).then(resp=>{console.log(resp)}).catch(e=>{console.log(e)})


        console.log("contributors after axios: ", contributors)
    } 

    totalCommitsCalc(data)
    {
        // the main issue with this is multiple api requests and the GitHub API rate limit, 60 per hour
        //this.githubAPIParser(data)
        return 0
    }

    totalStatsCalc(data)
    {
        var totalRepos = data.length
        var totalCommits = this.totalCommitsCalc(data)
        var avgCommits = 0
        //var avgCommitsVSContributors = data.length
        
        this.setState({totalStatsList: {totalRepos, totalCommits, avgCommits}})
    }

    handleSubmit(event){
        event.preventDefault()

        fetch(this.state.gitUserReposURL)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    gitData: result,
                    totalStatsList: this.totalStatsCalc(result),
                    gitUser: result[0].owner.login, //this is a terrible solution, need name from /user/
                    langs: result.map(function(el)  {return el.language}).filter(Boolean),
                    mappedLangs: sortedLangs(langsFilter(result)),
                })
                this.mapLangs(this.state.langs)
                this.totalStatsCalc(result)
            }
        )
    };

    handleChange(event) {

        var parsedURL = String('https://api.github.com/users/' + event.target.value + '/repos')
        this.setState({gitUserReposURL: parsedURL})
    }
    //<TotalStatistics repoStats={ totalStatsList }/>


    render() {
        const { gitData, totalStatsList } = this.state;
        return (
            <GitBodyContainer>
                <FPForm onSubmit={this.handleSubmit}>
                    <InputBox type="text" placeholder="Your GitHub username..." value={this.state.value} onChange={this.handleChange} />
                </FPForm>
                <ColTitle>Repository statistics for {this.state.gitUser}</ColTitle>
                <GitViewInfographics>
                    <TotalPieView>
                        <GitParagraph>
                            This pie graph, provided by <a href="https://apexcharts.com/">ApexCharts</a>, shows the collection of the programming languages from your repository. Each slice denotes a programming language and its prevalence in your public GitHub repositories.
                        </GitParagraph>
                        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={600} />
                    </TotalPieView>
                    <TotalStatisticsView>
                        <GitParagraph>
                            Below is a collection of statistics related to all the repositories as a whole. 
                        </GitParagraph>
                    </TotalStatisticsView>
                </GitViewInfographics>
                
                <ColTitle>{this.state.gitUser}'s public GitHub repositories</ColTitle>
                <GitViewRepos>
                    <GitParagraph>
                            This collection of repositories below can be found and displayed using the GitHub API available for any user. To see the raw data, click here: <a href={this.state.gitUserURL}>{this.state.gitUser}</a>.
                    </GitParagraph>
                    <RepoListView id="main-repo-list" list={ gitData } />
                </GitViewRepos>
            </GitBodyContainer>
            
    )}
};

export default GitHubAPIView;
