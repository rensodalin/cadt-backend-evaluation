let categories = [
    {
        id: 1,
        name: "Technology",
        description: "Latest tech news"
    }
];

export const getAllCategories = () => categories;
export const getCategoryById = (id) => categories.find(c => c.id === id);
export const createCategory = (category) => {
    const newCategory = { id: categories.length + 1, ...category };
    categories.push(newCategory);
    return newCategory;
};
export const updateCategory = (id, category) => {
    const index = categories.findIndex(c => c.id === id);
    if (index === -1) return null;
    categories[index] = { ...categories[index], ...category };
    return categories[index];
};
export const deleteCategory = (id) => {
    const index = categories.findIndex(c => c.id === id);
    if (index === -1) return false;
    categories.splice(index, 1);
    return true;
};