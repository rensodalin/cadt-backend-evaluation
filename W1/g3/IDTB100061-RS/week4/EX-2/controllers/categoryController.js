import * as Category from '../models/categoryModel.js';
import * as Article from '../models/articleModel.js';

export const getAllCategories = (req, res) => {
    const categories = Category.getAllCategories();
    res.json(categories);
};

export const getCategoryById = (req, res) => {
    const id = parseInt(req.params.id);
    const category = Category.getCategoryById(id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};

export const createCategory = (req, res) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    const newCategory = Category.createCategory({ name, description });
    res.status(201).json(newCategory);
};

export const updateCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const category = Category.updateCategory(id, req.body);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};

export const deleteCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const success = Category.deleteCategory(id);
    if (!success) return res.status(404).json({ error: 'Category not found' });
    res.status(204).send();
};

export const getCategoryArticles = (req, res) => {
    const id = parseInt(req.params.id);
    const category = Category.getCategoryById(id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    
    const articles = Article.getArticlesByCategory(id);
    res.json(articles);
};