var dataQuotations = [
  {
    quote: "Somewhere, something incredible is waiting to be know.",
    author: "Carl Sagan",
  },
  {
    quote: "The history of astronomy is a history of recending horizons.",
    author: "Edwin Hubble",
  },
  {
    quote:
      "Astronomy compels the soul to look upwards and leads us from this world to another.",
    author: "Plato",
  },
  {
    quote:
      "The universe is a pretty big place. If it's just us, seems like an awfull waste pf space.",
    author: "Carl Sagan",
  },
  {
    quote: "Astronomy, as nothing else can do teaches men humility.",
    author: "Arthur C. Clarke",
  },
];
var quotations = document.querySelector(".quotations");

function getQuote() {
  dataQuotations.forEach(function (data, index) {
    if (index == 0) {
      quotations.innerHTML += `
    <blockquote class="blockquote text-center text-white active">
      <p class="quote">${data.quote}</p>
      <footer class="blockquote-footer text-right quote-author">${data.author}</footer>
    </blockquote>
    `;
    } else {
      quotations.innerHTML += `
      <blockquote class="blockquote text-center text-white d-none">
        <p class="quote">${data.quote}</p>
        <footer class="blockquote-footer text-right quote-author">${data.author}</footer>
      </blockquote>
      `;
    }
  });
}

getQuote();

var blockquote = document.querySelectorAll(".blockquote");
var i = 0;
function showQuote() {
  blockquote.forEach(function (block, index) {
    if (block.classList.contains("active")) {
      block.classList.remove("active");
      block.classList.add("d-none");
      if (i < blockquote.length - 1) {
        i = index + 1;
      } else {
        i = 0;
      }
    }
  });
}
setInterval(function () {
  showQuote();
  blockquote[i].classList.add("active");
  blockquote[i].classList.remove("d-none");
}, 5000);
