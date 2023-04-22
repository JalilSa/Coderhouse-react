const products = [
    { id: '1', name: 'iPhone 12', price: 1000, category: 'Electronicos', stock: 25, description: 'Descripcion de iPhone 12' },
    { id: '2', name: 'Samsung Galaxy S21', price: 800, category: 'Electronicos', stock: 16, description: 'Descripcion de Samsung Galaxy S21' },
    { id: '3', name: 'iPad 8va Generacion', price: 1200, category: 'Electronicos', stock: 10, description: 'Descripcion de iPad 8va Generacion' },
    { id: '4', name: 'Sony Headphones WH-1000XM4', price: 350, category: 'Electronicos', stock: 30, description: 'Descripcion de Sony Headphones WH-1000XM4' },
    { id: '5', name: 'Camisa Casual', price: 45, category: 'Ropa', stock: 20, description: 'Descripcion de Camisa Casual' },
    { id: '6', name: 'Pantalones Vaqueros', price: 60, category: 'Ropa', stock: 15, description: 'Descripcion de Pantalones Vaqueros' },
    { id: '7', name: 'Chaqueta de Cuero', price: 120, category: 'Ropa', stock: 8, description: 'Descripcion de Chaqueta de Cuero' },
    { id: '8', name: 'Zapatillas Deportivas', price: 80, category: 'Ropa', stock: 25, description: 'Descripcion de Zapatillas Deportivas' },
    { id: '9', name: 'Reloj Analógico', price: 150, category: 'Accesorios', stock: 10, description: 'Descripcion de Reloj Analógico' },
    { id: '10', name: 'Pulsera de Plata', price: 100, category: 'Accesorios', stock: 5, description: 'Descripcion de Pulsera de Plata' },
    { id: '11', name: 'Gafas de Sol', price: 90, category: 'Accesorios', stock: 30, description: 'Descripcion de Gafas de Sol' },
    { id: '12', name: 'Cinturón de Cuero', price: 50, category: 'Accesorios', stock: 20, description: 'Descripcion de Cinturón de Cuero' },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1500);
    });
};
