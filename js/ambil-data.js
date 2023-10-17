const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const origin = location.origin;

fetch(origin + "/psycologists/" +id,{
	method: "GET"
})
.then(d => d.json())
.then(d => {
	document.querySelectorAll(".data").forEach(e =>{
		e.innerHTML = `${e.innerHTML} ${d[e.getAttribute("c-atr")]}`;
		document.head.querySelector("title").innerHTML = d["name"];
		photo.src = d["photo"];
		console.log(d)
	});
});

