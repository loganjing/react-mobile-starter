var c = {
    GOODS: {
        LIST: "GOODS:LIST",
        DETAIL: "GOODS:DETAIL",
        REMOVE: "GOODS:REMOVE"
    },

    ROUTE: {
        TRANSITION: "ROUTE:TRANSITION"
    }
};

var methods = {
    recipes: {
        add: function(name, desc, ingredients, directions, preventTransition) {
            this.dispatch(c.GOODS.LIST, {
                name: name,
                description: desc,
                ingredients: ingredients,
                directions: directions,
                preventTransition: preventTransition
            });
        },

        edit: function(id, name, desc, ingredients, directions) {
            this.dispatch(c.GOODS.DETAIL, {
                id: id,
                name: name,
                description: desc,
                ingredients: ingredients,
                directions: directions
            });
        },

        remove: function(id) {
            this.dispatch(c.GOODS.REMOVE, id);
        }
    },

    routes: {
        transition: function(path, params) {
            this.dispatch(c.ROUTE.TRANSITION, {path: path, params: params});
        }
    }
};

module.exports = {
    methods: methods,
    constants: c
};
