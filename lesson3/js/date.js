const date = new Date();
const year = date.getFullYear();


document.querySelector("#year").textContent = year;
document.getElementById("updated").textContent = `Last Modification: ${document.lastModified}`;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
 // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;




