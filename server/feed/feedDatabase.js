const db = require('../configs/db');

function feedDatabase(categories, data) {
    return Promise.all(
        data
            .map((d, i) => {
                return [d.products.items, categories[i]];
            })
            .map(([items, category]) => {
                return items.map((item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        unit: item.unit,
                        price: item.price,
                        salePrice: item.salePrice,
                        description: item.description,
                        discountInPercent: item.discountInPercent,
                        image: item.image,
                        gallery: JSON.stringify(item.gallery.map((g) => g.url)),
                        category: category.category,
                        type: category.type,
                    };
                });
            })
            .flat(Infinity)
            .map((item) => {
                return db('Product').insert(item);
            })
    );
}

module.exports = feedDatabase;
