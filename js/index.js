// a Page used for viewing a code post specifically.
var CodeView = {
    view: function (vnode) {
        var codeid = vnode.attrs.codeid;
        var pasteName = null;
        var pasteContent = null;
        firebase.database().ref(codeid).get().then(function (snapshot) {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                return m("h1", "e");
            }
            else {
                return m("div", { id: "app" }, [
                    m("h1", { style: "text-align: center;" }, "Uh oh!"),
                    m("h2", { style: "text-align: center;" }, "Seems like we couldn't find a data for it..."),
                    m("a", { href: "#!/home", style: "color: var(--font-color);" }, "Go back home")
                ]);
            }
        }).catch(function (error) {
            return m("div", { id: "app" }, [
                m("h1", { style: "text-align: center;" }, "Something went wrong..."),
                m("p", { style: "text-align: center;" }, "Error: " + error),
                m("a", { href: "#!/home", style: "color: var(--font-color);" }, "Go back home")
            ]);
        });
    }
};
var Home = {
    view: function () {
        return m("div", { id: "app" }, [
            m("div", { id: "about" }, [
                m("div", { class: "container" }, [
                    m("h2", "CodeVotes"),
                    m("p", "A place where you can vote for code!")
                ])
            ]),
            m("section", { id: "codes" }, [
                m("h1", { style: "text-align: center;" }, "Hello world!")
            ])
        ]);
    }
};
m.route(document.getElementById("root"), "/home", {
    "/home": Home,
    "/codes/:codeid": CodeView,
    // "/submit": SubmitCode
});
