// a Page used for viewing a code post specifically.
let CodeView = {
	view: function() {
		return m("div", {id: "app"}, [
		])
	}
};

let Home = {
	view: function() {
		return m("div", {id: "app"}, [
			m("div", {id: "about"}, 
				[
					m("div", {class: "container"}, [
						m("h2", "CodeVotes"),
						m("p", "A place where you can vote for code!")
					])
				]
			),
			m("section", {id: "codes"}, [
				m("h1", {style: "text-align: center;"}, "Hello world!")
			])
		]);
	}
};

m.route(
	document.getElementById("root"), "/home",
	{
		"/home": Home
	}
);
