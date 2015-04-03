var React = require("react"),
    Router = require("react-router"),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,
    Fluxxor = require("fluxxor");

var RecipeList = React.createClass({
    mixins: [Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("list")],

    getStateFromFlux: function() {
        return {
            recipes: this.getFlux().store("list").getGoods()
        };
    },

    render: function() {
        return (
            <div>
                <h1>Recipes</h1>
                <ul>{this.state.recipes.map(this.renderRecipeLink)}</ul>
            </div>
        );
    },

    renderRecipeLink: function(recipe) {
        return (
            <li key={recipe.id}>
                <Link to="recipe" params={{id: recipe.id}}>{recipe.name}</Link>
            </li>
        );
    }
});

module.exports = RecipeList;
