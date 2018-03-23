export function formatPrice(cents) {
	return (cents / 100).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
}

// Put these things inside of app.js to generate the keys
// createItemKeys() {
// 	const currentMenus = { ...this.state.menus };

// 	if (currentMenus.sections) {
// 		currentMenus.sections.map((section, index) => {
// 			section.key = `${Date.now() + index}`;

// 			section.items.map((item, itemIndex) => {
// 				item.key = `${Date.now() + itemIndex}`;
// 			});
// 		});
// 	}

// 	return currentMenus;
// }

// if (this.state.menus.sections) {
// 	let withKeys = this.createItemKeys();

// 	withKeys = JSON.stringify(withKeys, null, 2);

// 	debugger;
// }
