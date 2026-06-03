const products = [
    {
        name: 'Gary',
        image: './images/Gary.webp',
        price: 79.00,
        description: "Looks good, feel great in these comfort sneakers you won't want to take off.",
        color: 'Tan and midnight',
        sizes: 'US 6, 7, 8, 9, 10, 11',
        sole: 'Rubber',
        sock: 'Synthetic',
        upper: 'Leather',
    },
    {
        name: 'Work and Walk',
        image: './images/work_and_walk.webp',
        price: 85.00,
        description: 'Hiking-inspired with everyday style, meet the Work and Walk boot.',
        color: 'Chestnut',
        sizes: 'US 6, 7, 8, 9, 10, 11',
        sole: 'Rubber',
        sock: 'Pigskin',
        upper: 'Leather',
    },
    {
        name: 'Sally',
        image: './images/Sally.webp',
        price: 75.00,
        description: 'Sally is giving our serious comfort goals, with its soft semi line uppers and padded arch support.',
        color: 'Tan and black',
        sizes: 'US 6, 7, 8, 9, 10, 11',
        sole: 'Phylon rubber',
        sock: 'Pigskin',
        upper: 'Leather',
    },
    {
        name: 'Heavenly',
        image: './images/Heavenly.webp',
        price: 90.00,
        description: 'Perfect for those on their feet all day who require leather uppers for easy cleaning.',
        color: 'Black',
        sizes: 'US 6, 7, 8, 9, 10, 11',
        sole: 'Rubber',
        sock: 'Pigskin',
        upper: 'Leather',
    },
    {
        name: 'Mason',
        image: './images/mason.webp',
        price: 82.00,
        description: 'Mason is a comfortable everyday sneaker designed for people who spend long hours on their feet.',
        color: 'Black and grey',
        sizes: 'US 6, 7, 8, 9, 10, 11',
        sole: 'Rubber',
        sock: 'Synthetic',
        upper: 'Leather',
    },
    {
        name: 'Clancy',
        image: './images/Clancy.webp',
        price: 59.00,
        description: 'The Clancy sandal allows air circulation due to the holes on each side.',
        color: 'Black',
        sizes: 'US 6, 7, 8, 9, 10, 11',
        sole: 'Rubber',
        sock: 'Pigskin',
        upper: 'Leather',
    },
    {
        name: 'Ella',
        image: './images/ella.webp',
        price: 78.00,
        description: "Ella is a lightweight women's casual shoe made for comfort and easy everyday wear.",
        color: 'Beige and white',
        sizes: 'US 6, 7, 8, 9, 10, 11',
        sole: 'Phylon rubber',
        sock: 'Pigskin',
        upper: 'Leather',
    },
    {
        name: 'River',
        image: './images/River.webp',
        price: 69.00,
        description: 'River combines casual style with all-day support, perfect for any occasion.',
        color: 'Navy blue',
        sizes: 'US 6, 7, 8, 9, 10, 11',
        sole: 'Rubber',
        sock: 'Pigskin',
        upper: 'Leather',
    },
    {
        name: 'Lily',
        image: './images/Lily.webp',
        price: 99.00,
        description: "Looks good, feel great in these comfort sneakers you won't want to take off.",
        color: 'Blue',
        sizes: 'US 6, 7, 8, 9, 10',
        sole: 'Phylon rubber',
        sock: 'Synthetic',
        upper: 'Leather',
    },
];

const shopList = document.querySelector('.shop-list');

if (shopList) {
    shopList.innerHTML = products.map(product => `
        <li class="shop-block">
            <div class="shop-block-wrap">
                <div class="shop-block-thumb">
                    <img src="${product.image}" alt="${product.name}" width="370" height="294" />
                    <div class="shop-block-thumb-txt">
                        <p>${product.description}</p>
                        <p>Color: ${product.color}</p>
                        <p>Sizes: ${product.sizes}</p>
                        <p>Sole Material: ${product.sole}</p>
                        <p>Sock Material: ${product.sock}</p>
                        <p>Upper Material: ${product.upper}</p>
                    </div>
                </div>
                <div class="shop-text">
                    <h2 class="shop-title">${product.name}</h2>
                    <p class="shop-description">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        </li>
    `).join('');
}
