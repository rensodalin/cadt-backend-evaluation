import * as Article from '../models/articleModel.js';

export const getAllArticles = (req, res) => {
    const articles = Article.getAllArticles();
    res.json(articles);
};

export const getArticleById = (req, res) => {
    const id = parseInt(req.params.id);
    const article = Article.getArticleById(id);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};

export const createArticle = (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;
    if (!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newArticle = Article.createArticle({
        title,
        content,
        journalistId,
        categoryId,
        publishDate: new Date().toISOString().split('T')[0]
    });
    res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const article = Article.updateArticle(id, req.body);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};

export const deleteArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const success = Article.deleteArticle(id);
    if (!success) return res.status(404).json({ error: 'Article not found' });
    res.status(204).send();
};