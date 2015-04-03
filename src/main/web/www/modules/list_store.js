var Fluxxor = require("fluxxor");

var actions = require("./actions");

var NOT_FOUND_TOKEN = {};

var RecipeStore = Fluxxor.createStore({
    initialize: function() {
        this.recipeId = 0;
        this.datas = {};

        this.bindActions(
            actions.constants.GOODS.DETAIL, this.handleEditRecipe
        );
    },

    getGoods: function() {
        return Object.keys(this.datas).map(function(key) {
            return this.datas[key];
        }.bind(this));
    },

    getRecipe: function(id) {
        return this.datas[id] || NOT_FOUND_TOKEN;
    },

    handleEditRecipe: function(payload) {
        this.datas[payload.id] = {
            id: payload.id,
            name: payload.name,
            description: payload.description,
            ingredients: payload.ingredients,
            directions: payload.directions
        };

        this.emit("change");
    }
});

RecipeStore.NOT_FOUND_TOKEN = NOT_FOUND_TOKEN;

module.exports = RecipeStore;
