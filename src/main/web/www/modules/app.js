var React = require("react"),
    Router = require("react-router"),
    Fluxxor = require("fluxxor");

var actions = require("./actions"),
    routes = require("./routes"),
    ListStore = require("./list_store");
    RouteStore = require("./edit_store");
    Layout = require("./components/Layout");


require("./css/main.css");

var router = Router.create({routes: routes});

var stores = {
    list: new ListStore(),
    detail: new RouteStore({router: router})
};

var flux = new Fluxxor.Flux(stores, actions.methods);
flux.on("dispatch", function(type, payload) {
    console.log("Dispatch:", type, payload);
});

//flux.actions.datas.add(
//    "Strawberry Smoothie",
//    "A yummy fruit smoothie made with tropical fruits.",
//    [
//        { quantity: "8",       item: "strawberries, hulled" },
//        { quantity: "1/2 cup", item: "skim milk" },
//        { quantity: "1/2 cup", item: "plain yogurt" },
//        { quantity: "3 tbsp",  item: "white sugar" },
//        { quantity: "2 tsp",   item: "vanilla extract" },
//        { quantity: "6",       item: "ice cubes, crushed" }
//    ],
//    "In a blender combine strawberries, milk, yogurt, sugar and vanilla. Toss in the ice. Blend until smooth and creamy. Pour into glasses and serve.",
//    true
//);

router.run(function(Handler) {
    React.render(
        <Layout pageTitle="Mobile Example">
            <Handler flux={flux} />
        </Layout>,
        document.getElementById("app")
    );
});
