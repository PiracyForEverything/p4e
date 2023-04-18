// All purpose links --START--

// const linksallpurposeddl = [
//   { text: "Link 1", href: "https://www.example.com/link1" },
//   { text: "Link 2", href: "https://www.example.com/link2" },
//   { text: "Link 3", href: "https://www.example.com/link3" },
// ];
// const linksallpurposesplapps = [
//   { text: "Link 4", href: "https://www.example.com/link4" },
//   { text: "Link 5", href: "https://www.example.com/link5" },
//   { text: "Link 6", href: "https://www.example.com/link6" },
// ];
// const linksallpurposetorrents = [
//   { text: "Link 4", href: "https://www.example.com/link4" },
//   { text: "Link 5", href: "https://www.example.com/link5" },
//   { text: "Link 6", href: "https://www.example.com/link6" },
// ];

// All purpose links --END--

// Anime links --END--

// const links_anime_ddl = [
//   { text: "Link 4", href: "https://www.example.com/link4" },
//   { text: "Link 5", href: "https://www.example.com/link5" },
//   { text: "Link 6", href: "https://www.example.com/link6" },
// ];


// Anime links --END--

// loop through the linksOne array and create li and a elements
const parentOne = document
  .getElementById("all-purpose-ddl")
  .querySelector("ul");
for (let i = 0; i < linksallpurposeddl.length; i++) {
  const link = linksallpurposeddl[i];

  // create a new li element
  const li = document.createElement("li");

  // create a new a element
  const a = document.createElement("a");
  a.textContent = link.text;
  a.href = link.href;
  a.target = "_blank";

  // append the a element to the li element
  li.appendChild(a);

  // append the li element to the parent ul element of js-one
  parentOne.appendChild(li);
}

// loop through the linksTwo array and create li and a elements
const parentTwo = document
  .getElementById("all-purpose-spl-apps")
  .querySelector("ul");
for (let i = 0; i < linksallpurposesplapps.length; i++) {
  const link = linksallpurposesplapps[i];

  // create a new li element
  const li = document.createElement("li");

  // create a new a element
  const a = document.createElement("a");
  a.textContent = link.text;
  a.href = link.href;
  a.target = "_blank";

  // append the a element to the li element
  li.appendChild(a);

  // append the li element to the parent ul element of js-two
  parentTwo.appendChild(li);
}

// All purpose torrents loop
const parentThree = document
  .getElementById("all-purpose-torrents")
  .querySelector("ul");
for (let i = 0; i < linksallpurposetorrents.length; i++) {
  const link = linksallpurposetorrents[i];

  // create a new li element
  const li = document.createElement("li");

  // create a new a element
  const a = document.createElement("a");
  a.textContent = link.text;
  a.href = link.href;
  a.target = "_blank";

  // append the a element to the li element
  li.appendChild(a);

  // append the li element to the parent ul element of js-two
  parentThree.appendChild(li);
}


// All purpose torrents loop
const parentFour = document
  .getElementById("anime_ddl")
  .querySelector("ul");
for (let i = 0; i < links_anime_ddl.length; i++) {
  const link = links_anime_ddl[i];

  // create a new li element
  const li = document.createElement("li");

  // create a new a element
  const a = document.createElement("a");
  a.textContent = link.text;
  a.href = link.href;
  a.target = "_blank";

  // append the a element to the li element
  li.appendChild(a);

  // append the li element to the parent ul element of js-two
  parentFour.appendChild(li);
}
