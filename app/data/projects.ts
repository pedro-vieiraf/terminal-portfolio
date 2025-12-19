import TerminalImage from "../../public/icons/projects/terminal.svg";

export const projects = [
    {
        name: 'BlogsAPI',
        description: 'A RESTful API for managing blog posts, users, and categories with JWT authentication and role-based access control.',
        technologies: ['Node.js', 'Express', 'JWT'],
        url: 'https://github.com/pedro-vieiraf/blogs-api',
        image: TerminalImage
    },
    {
        name: 'Store Management API',
        description: 'An API for managing products and sales in a store, featuring CRUD operations and data validation.',
        technologies: ['Node.js', 'Adonis.js', 'Docker'],
        url: 'https://github.com/pedro-vieiraf/store-management',
        image: TerminalImage
    }
]