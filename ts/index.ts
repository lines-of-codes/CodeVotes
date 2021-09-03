interface MithrilObject {}

type MithrilObjectType = MithrilObject;

interface Mithril {
	(tag: any, info: object, child: MithrilObject[] | string): MithrilObjectType;
	(tag: any, child: MithrilObject[] | string): MithrilObjectType;
	route: (root: HTMLElement, defaultRoute: string, routes: object) => void;
	render: (root: HTMLElement, object: MithrilObjectType) => void;
}

declare const m: Mithril;

let content: MithrilObjectType[] = [m("h1", "Loading...")]

// a Page used for viewing a code post specifically.
let CodeView = {
	view: function(vnode: {attrs: {codeid: string}}) {
		let codeid = vnode.attrs.codeid;
		let pasteName = null;
		let pasteContent = null;
		firebase.database().ref(codeid).get().then((snapshot: any) => {
			if(snapshot.exists()) {
				console.log(snapshot.val());
				content = [m("h1", "e")];
			} else {
				content = [
					m("h1", {style: "text-align: center;"}, "Uh oh!"),
					m("h2", {style: "text-align: center;"}, "Seems like we couldn't find a data for it..."),
					m("a", {href: "#!/home", style: "color: var(--font-color);"}, "Go back home")
				];
			}
		}).catch((error: any) => {
			content = [
					m("h1", {style: "text-align: center;"}, "Something went wrong..."),
					m("p", {style: "text-align: center;"}, "Error: " + error),
					m("a", {href: "#!/home", style: "color: var(--font-color);"}, "Go back home")
				];
			console.error(error);
		});
		return m("div", {id: "app"}, content)
	}
};

let Home = {
	view: function(): MithrilObjectType {
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
		"/home": Home,
		"/codes/:codeid": CodeView,
		// "/submit": SubmitCode
	}
);
