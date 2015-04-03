/** @jsx React.DOM */
var React = require('react');
module.exports = React.createClass({
    render: function() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
                    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/pics/iocns/favicon-144x144.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/pics/iocns/favicon-114x114.png" />
                    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/pics/iocns/favicon-72x72.png" />
                    <link rel="shortcut icon" href="/pics/icons/favicon.png" />
                    <title>{this.props.pageTitle}</title>
                    //<link rel="stylesheet" href={this.props.cssfile || '/webapp/build/css/index.css'} />
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
});