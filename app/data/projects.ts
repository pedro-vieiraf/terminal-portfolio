export const finoraRepository = 'https://github.com/pedro-vieiraf/finora';

export const projects = [
  {
    name: 'Finora',
    description: 'Personal finance app for tracking accounts, transactions, and credit card bills, with Open Finance synchronization through Pluggy.',
    technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'Expo'],
    url: finoraRepository,
  },
  {
    name: 'Appointment System',
    description: 'REST API for scheduling appointments and sending email reminders. It enforces status transitions from booking to completion or cancellation, with automated tests running in GitHub Actions.',
    technologies: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Docker'],
    url: 'https://github.com/pedro-vieiraf/appointment-system',
  },
  {
    name: 'BlogsAPI',
    description: 'REST API for managing blog posts, users, and categories with JWT authentication and role-based access control.',
    technologies: ['Node.js', 'Express', 'JWT'],
    url: 'https://github.com/pedro-vieiraf/blogs-api',
  },
  {
    name: 'Store Management API',
    description: 'API for managing store products and sales, with data validation.',
    technologies: ['Node.js', 'AdonisJS', 'Docker'],
    url: 'https://github.com/pedro-vieiraf/store-management',
  },
];
