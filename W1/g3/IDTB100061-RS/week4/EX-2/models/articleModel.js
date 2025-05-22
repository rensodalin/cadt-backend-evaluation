let articles = [
    {
        id: 1,
        title: "The Future of AI",
        content: "AI is revolutionizing...",
        journalistId: 1,
        categoryId: 1,
        publishDate: "2024-02-20"
    }
];

export const getAllArticles = () => articles;
export const getArticleById = (id) => articles.find(a => a.id === id);
export const createArticle = (article) => {
    const newArticle = { id: articles.length + 1, ...article };
    articles.push(newArticle);
    return newArticle;
};
export const updateArticle = (id, article) => {
    const index = articles.findIndex(a => a.id === id);
    if (index === -1) return null;
    articles[index] = { ...articles[index], ...article };
    return articles[index];
};
export const deleteArticle = (id) => {
    const index = articles.findIndex(a => a.id === id);
    if (index === -1) return false;
    articles.splice(index, 1);
    return true;
};
export const getArticlesByJournalist = (journalistId) => {
    return articles.filter(a => a.journalistId === journalistId);
};
export const getArticlesByCategory = (categoryId) => {
    return articles.filter(a => a.categoryId === categoryId);
};