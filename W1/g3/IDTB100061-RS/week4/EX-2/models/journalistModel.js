let journalists = [
    {
        id: 1,
        name: "John Smith",
        email: "john@news.com",
        specialty: "Technology"
    }
];

export const getAllJournalists = () => journalists;
export const getJournalistById = (id) => journalists.find(j => j.id === id);
export const createJournalist = (journalist) => {
    const newJournalist = { id: journalists.length + 1, ...journalist };
    journalists.push(newJournalist);
    return newJournalist;
};
export const updateJournalist = (id, journalist) => {
    const index = journalists.findIndex(j => j.id === id);
    if (index === -1) return null;
    journalists[index] = { ...journalists[index], ...journalist };
    return journalists[index];
};
export const deleteJournalist = (id) => {
    const index = journalists.findIndex(j => j.id === id);
    if (index === -1) return false;
    journalists.splice(index, 1);
    return true;
};