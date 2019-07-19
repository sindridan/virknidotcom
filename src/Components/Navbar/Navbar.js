import React, { Component } from "react";
import Prismic from 'prismic-javascript';
import { Link, RichText, Date } from 'prismic-reactjs';

class Navbar extends Component {

    componentWillMount() {
        const apiEndpoint = 'https://sdgweb.cdn.prismic.io/api/v2';

        Prismic.api(apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.type', 'page')).then(response => {
                if (response) {
                    this.setState({ doc: response.results[0] });
                }
            });
        });
    }

    state = {
        doc: null,
    }

    // Link Resolver
    linkResolver(doc) {
        // Define the url depending on the document type
        if (doc.type === 'about-me') {
            return '/about-me/';
        } else if (doc.type === 'navbar') {
            return '/'
        }
        // Default to homepage
        return '/';
    }
    render() {
        if (this.state.doc) {
            const document = this.state.doc.data;
            return (
                <div>
                    <p>Prismic works</p>
                </div>
            );
        }
        return <h1>Loading...</h1>;
    }
}

export default Navbar;