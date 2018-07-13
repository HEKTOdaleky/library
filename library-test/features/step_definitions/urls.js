const baseUrl = 'http://localhost:3000';

module.exports = {
    loginUrl: baseUrl + '/login',
    addBook: baseUrl + '/add-book',
    addStatus: baseUrl + '/add-status',
    addCategory: baseUrl + '/add-category',
    addGroup: baseUrl + '/add-group',
    addLanguage: baseUrl + '/add-language',
    addReader: baseUrl + '/add-reader',
    createNewUser: baseUrl + '/create-new-user',
    deleteStatus: baseUrl + '/delete-status',
    deleteLang: baseUrl + '/delete-language',
    deleteGroup: baseUrl + '/delete-group',
    deleteCategory: baseUrl + '/delete-category',
    deleteReader: baseUrl + '/delete-reader',
    getBook: baseUrl + '/get-book',
    editBook: baseUrl + '/edit-book',
    deleteBook: baseUrl + '/delete-book'
};