function parseCategory(category) {
    const validCategories = ['books', 'electronics', 'clothing', 'other'];
    if(validCategories.includes(category)) {
        return category;
    }
}

function parseNumber(number) {
    const parsedNumber = Number(number);
    if (Number.isNaN(parsedNumber)) {
        return;
    }
}

export function parseFilterParams(query) {
    const {category, minPrice, maxPrice} = query;

    const parsedCategory = parseCategory(category);
    const parsedMinPrice = parseNumber(minPrice);
    const parsedMaxPrice = parseNumber(maxPrice);

    return {
        category: parsedCategory,
        minPrice: parsedMinPrice,
        maxPrice: parsedMaxPrice,
    };
}   