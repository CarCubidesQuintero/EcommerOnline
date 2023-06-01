const stockProductos = [
    {
       id: 1,
       title:"Nombre del producto",
       desc: "Acá va la descripción del producto",
       price: 54000,
       img: "img/omnilife1.jpg",
    },
    {
        id: 2,
        title:"Nombre del producto",
        desc: "Acá va la descripción del producto",
        price: 54000,
        img: "img/omnilife1.jpg",
        
    },

    {
        id: 3,
        title:"Nombre del producto",
        desc: "Acá va la descripción del producto",
        price: 54000,
        img: "img/omnilife1.jpg",
        
    },
    
    {
        id: 4,
        title:"Nombre del producto",
        desc: "Acá va la descripción del producto",
        price: 54000,
        img: "img/omnilife1.jpg",
        
    },
    {
        id: 3,
        title:"Nombre del producto",
        desc: "Acá va la descripción del producto",
        price: 54000,
        img: "img/omnilife1.jpg",
        
    },
    {
        id: 3,
        title:"Nombre del producto",
        desc: "Acá va la descripción del producto",
        price: 54000,
        img: "img/omnilife1.jpg",
        
    },
    {
        id: 3,
        title:"Nombre del producto",
        desc: "Acá va la descripción del producto",
        price: 54000,
        img: "img/omnilife1.jpg",
        
    },
    {
        id: 3,
        title:"Nombre del producto",
        desc: "Acá va la descripción del producto",
        price: 54000,
        img: "img/omnilife1.jpg",
        
    }
];

const  container = document.querySelector('#container')

stockProductos.forEach((prod) => {
    const{id, img, title, desc, price} = prod
    container.innerHTML += `
    
   
<main class="main">
  <div class="container">
    <section class="container-products">
      <div class="product">
        <div class="product-ensi"></div>
        <img src="${img}" alt="" class="product__img">
        <div class="product__description">
          <h3 class="product__title">${title}</h3>
          <p><span>${desc}</span></p>
          <span class="product__price">$ ${price}</span>
        </div>
        <a href="/pasarela"><i class="fas fa-cart-plus contac"> hacer Pedido </i></a>
      </div>
    </section>
  </div>
</main>
    `
})