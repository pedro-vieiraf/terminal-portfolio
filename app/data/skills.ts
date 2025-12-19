import  PythonIcon from '../../public/icons/skills/python.svg';
import  NodeIcon from '../../public/icons/skills/node.svg';
import  JavascriptIcon from '../../public/icons/skills/javascript.svg';
import TypescriptIcon from '../../public/icons/skills/typescript.svg';
import  MysqlIcon from '../../public/icons/skills/mysql.svg';
import DockerIcon from '../../public/icons/skills/docker.svg';

export const mainSkills = [
  { name: 'JavaScript', icon: JavascriptIcon },
  { name: 'TypeScript', icon: TypescriptIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'MySQL', icon: MysqlIcon },
  { name: 'Docker', icon: DockerIcon },
];

export const otherSkills = {
  backend: ['Express.js', 'Nest.js', 'Django', 'Flask', 'FastAPI'],
  databases: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Redis'],
  frontend: ['React', 'HTML', 'CSS', 'Tailwind', 'Redux'],
  testing: ['Jest', 'Mocha', 'Chai'],
};