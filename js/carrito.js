const carritoElemento = document.querySelector("#carrito");
const productosElemento = document.querySelector("#productos");



localStorage.setItem("carrito", JSON.stringify([]))
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



const mostrarProductos = () => {
    productosElemento.innerHTML = " ";
    productos.forEach((producto, index) => {
        let productoBox = document.createElement("div");
        productoBox.innerHTML = `
          <p>Nombre:${producto.nombre}</p>
          <p>Precio: ${producto.precio}</p> 
          <p>Stock: ${producto.stock}</p> 
          `;
        productosElemento.appendChild(productoBox);
      
        let btnAgregar = document.createElement("button");
        btnAgregar.innerHTML = "Agregar";
        productoBox.appendChild(btnAgregar);
        
        btnAgregar.onclick = () => agregarProducto(index);
      });
}


const agregarProducto = (index) => {
productos[index].cantidad =  contador;

if(contador > productos[index].stock) {
    return alert(`No hay stock suficiente el máximo de productos es ${productos[index].stock}`)
}

if (contador === 0) {
  return alert("Debe agregar por lo menos 1 producto al carrito");
}


  carrito.push(productos[index]);

  localStorage.setItem("carrito", JSON.stringify(carrito));


  productos[index].stock -= contador;


  contador = 0;
  actualizarContador(); 
  mostrarProductos();
  mostrarCarrito();
};

const mostrarCarrito = () => {
    
  carritoElemento.innerHTML = " ";

  carrito = JSON.parse(localStorage.getItem("carrito"));
  
  carrito.forEach((producto) => {
    let productoBox = document.createElement("div");
    productoBox.innerHTML = `
    <p>Nombre:${producto.nombre}</p>
    <p>Precio: ${producto.precio}</p> 
    <p>Cantidad: ${producto.cantidad}</p> 
    <p>Subtotal: ${producto.precio * producto.cantidad}</p> 
    <p>-------------------------------------------</p> 
    `;
    carritoElemento.appendChild(productoBox);
  });

  let vaciarCarrito = document.createElement("button");
  vaciarCarrito.innerHTML = "Vaciar Carrito";
  carritoElemento.appendChild(vaciarCarrito);

  vaciarCarrito.onclick = () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }

};

mostrarProductos();
mostrarCarrito();