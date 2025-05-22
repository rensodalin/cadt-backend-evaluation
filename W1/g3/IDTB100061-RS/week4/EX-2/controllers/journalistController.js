import * as Journalist from '../models/journalistModel.js';
import * as Article from '../models/articleModel.js';

export const getAllJournalists = (req, res) => {
    const journalists = Journalist.getAllJournalists();
    res.json(journalists);
};

export const getJournalistById = (req, res) => {
    const id = parseInt(req.params.id);
    const journalist = Journalist.getJournalistById(id);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};

export const createJournalist = (req, res) => {
    const { name, email, specialty } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newJournalist = Journalist.createJournalist({ name, email, specialty });
    res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
    const id = parseInt(req.params.id);
    const journalist = Journalist.updateJournalist(id, req.body);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};

export const deleteJournalist = (req, res) => {
    const id = parseInt(req.params.id);
    const success = Journalist.deleteJournalist(id);
    if (!success) return res.status(404).json({ error: 'Journalist not found' });
    res.status(204).send();
};

export const getJournalistArticles = (req, res) => {
    const id = parseInt(req.params.id);
    const journalist = Journalist.getJournalistById(id);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    
    const articles = Article.getArticlesByJournalist(id);
    res.json(articles);
};