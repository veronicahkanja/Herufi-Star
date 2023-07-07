let data = [
    { 
      title: "Mathematics", 
      description: "Learn about algebra, geometry, and calculus.", 
      image: "math.jpg"
    },
    { 
      title: "Science", 
      description: "Explore the worlds of biology, chemistry, and physics.", 
      image: "science.jpg"
    },
    { 
      title: "Literature", 
      description: "Read classic and contemporary works of fiction and non-fiction.", 
      image: "literature.jpg"
    }
  ];
  function generateHTML(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html += `
        <div class="item">
          <img src="${data[i].image}" alt="${data[i].title}">
          <h2>${data[i].title}</h2>
          <p>${data[i].description}</p>
        </div>
      `;
    }
    return html;
  }
  let container = document.querySelector(".container");
  container.innerHTML = generateHTML(data);
    