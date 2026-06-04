const botonMostrar = document.getElementById('btnProductos');
const prodRow = document.getElementById('prodRow');

botonMostrar.addEventListener(`click`, () => {
    const API_URL = 'https://fakestoreapi.com/products';

    fetch(API_URL)
        .then(response => response.json())
        .then(productos => {
            

            
            productos.forEach(producto => {
                
                const cardHTML = `
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="card h-100 shadow-sm">
                            <div class="p-3 d-flex align-items-center justify-content-center" style="height: 200px;">
                                <img src="${producto.image}" class="card-img-top img-fluid" alt="${producto.title}" style="max-height: 100%; object-fit: contain;">
                            </div>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <span class="badge bg-secondary mb-2 text-uppercase">${producto.category}</span>
                                    <h5 class="card-title text-truncate" title="${producto.title}">${producto.title}</h5>
                                </div>
                                <div class="mt-3">
                                    <p class="card-text fs-4 fw-bold text-success">$${producto.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

               
            });
        }); 