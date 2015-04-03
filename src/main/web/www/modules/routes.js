var React = require("react"),
    Router = require("react-router"),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

var GoodDetail = require("./goods/good_detail"),
    GoodList = require("./goods/good_list");

var routes = (
    <Route handler={GoodList} name="home" path="/">

        <Route handler={GoodDetail} path="/good/:id">
            <DefaultRoute handler={GoodList} name="recipe" />
        </Route>

        <DefaultRoute handler={GoodList} />
    </Route>
);

module.exports = routes;
