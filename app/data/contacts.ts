import LinkedInIcon from '../../public/icons/contact/linkedin.svg';
import GitHubWhite from '../../public/icons/contact/github-light-theme.svg';
import GitHubDark from '../../public/icons/contact/github-dark-theme.svg';
import MailWhite from '../../public/icons/contact/mail-light-theme.svg';
import MailDark from '../../public/icons/contact/mail-dark-theme.svg';

export const contacts = [
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    brand: true,
    url: 'https://linkedin.com/in/pedro-vieira-dev/'
  },
  {
    name: 'GitHub',
    icon: { dark: GitHubDark, light: GitHubWhite },
    url: 'https://github.com/pedrovieiraf'
  },
  {
    name: 'Email',
    icon: { dark: MailDark, light: MailWhite },
    url: 'mailto:pedrovieirafdev@gmail.com'
  },
];
