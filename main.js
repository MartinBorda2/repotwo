class Producto {
  constructor(marca, talle, cantidad,) {
    this.marca = marca;
    this.talle = talle;
    this.cantidad = cantidad;
  }

  cambiarMarca(marca) {
    this.Marca = marca;
    alert("La marca ha sido modificado con éxito");
  }

  cambiarTalle(talle) {
    if (isNaN(talle)) {
      return alert("El talle debe ser un valor numérico");
    }
    this.talle = talle;
    alert("El talle ha sido modificado con éxito");
  }

  cambiarCantidad(cantidad) {
    this.cantidad = cantidad;
    alert("La cantidad ha sido modificada con éxito");
  }
}

const mostrarProductos = (productos) => {
  console.clear();
  console.log("Productos registrados");


  productos.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    } else if (a.nombre < b.nombre) {
      return -1;
    } else {
      return 0;
    }
  });

  productos.forEach(producto => console.log(producto));
};


let productos = [
  new Producto("Vans", 40, 5),
  new Producto("Le Coq Sportif", 38, 5),
  new Producto("Fila", 42, 5),
  new Producto("Jaguar", 37, 5),
];

mostrarProductos(productos);




const agregarProducto = () => {

  let marca = prompt("Ingrese la marca del producto");
  let talle = parseInt(prompt("Ingrese el talle del producto"))
  let cantidad = parseInt(prompt("Ingrese la cantidad del producto"));


  let producto = new Producto(marca, talle, cantidad);


  productos.push(producto);


  mostrarProductos(productos);
};


const eliminarProducto = () => {

  const productoBuscado = productoExiste()

  if (!productoBuscado) return

  const confirmacion = confirm(`Estas seguro que deseas eliminar el producto ${productoBuscado.marca} ?`)

  if (confirmacion) {
    productos = productos.filter(producto => producto.marca.toLowerCase() !== productoBuscado.marca.toLowerCase());
    mostrarProductos(productos);
  } else {
    alert("Eliminación cancelada")
  }

};

const editarProducto = () => {

  const productoBuscado = productoExiste()

  if (!productoBuscado) return

  alert("Menú editar producto:\n1 - Editar marca\n2 - Editar talle\n3 - Editar cantidad");

  let opcion = parseInt(prompt("Ingrese una opción para editar"));

  switch (opcion) {
    case 1:
      let marca = prompt("Ingrese la marca del producto");
      productoBuscado.cambiarMarca(marca);
      break;
    case 2:
      let talle = parseInt(prompt("Ingrese el talle del producto"));
      pruductoBuscado.cambiarTalle(talle);
      break;
    case 3:
      let cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
      productoBuscado.cambiarCantidad(cantidad);
      break;
    default:
      alert("Ingrese una opción correcta");
  }

  mostrarProductos(productos);
}




const productoExiste = () => {

  let marcaProducto = prompt("Ingrese la marca del producto");


  let indice = productos.findIndex(
    (producto) => producto.marca.toLowerCase() === marcaProducto.toLowerCase()
  );

  if (indice === -1) {

    return alert(`El producto ${marcaProducto} no existe`);
  }

  return productos[indice];
};

let encendido = true;


while (encendido) {
  alert("A continuacion, tendrás la lista de productos de un local de Zapatillas para poder administrarla. En ella ya se encuentran algunos productos.")
  alert("Lista principal de productos:\n1 - Agregar un producto\n2 - Eliminar un producto\n3 - Modificar un producto\n4 - Apagar");
  let opcion = parseInt(prompt("Ingrese una opción"));

  switch (opcion) {
    case 1:
      agregarProducto();
      break;
    case 2:
      eliminarProducto();
      break;
    case 3:
      editarProducto();
      break;
    case 4:
      encendido = false;
      break;
    default:
      alert("Inserte una opción correcta");
  }
}

alert("Gracias por su visita!");