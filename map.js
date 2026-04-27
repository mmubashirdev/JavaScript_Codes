const  items = ["Apple", "banana", "grapes"];
const List = `We have ${items.length} items:
${items.map(item=>`- ${item}`).join("\n")}`

console.log(List)

