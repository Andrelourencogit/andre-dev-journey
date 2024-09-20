import { useState } from 'react';
import './Portfolio.scss';
import dimapLogo from '../../../assets/img/dimap.jpg';
import polareLogo from '../../../assets/img/polare.jpg';
import sisuLogo from '../../../assets/img/sisu.png';
import besLogo from '../../../assets/img/bes.jpg';
import proexLogo from '../../../assets/img/proex.jpg';
import siaLogo from '../../../assets/img/sia.jpg';
import posgraduacaoLogo from '../../../assets/img/posgraduacao.jpg';
import sisbiLogo from '../../../assets/img/sisbi.png';
import ecictLogo from '../../../assets/img/ecict.png';
import portalLogo from '../../../assets/img/portal.png';
import stiLogo from '../../../assets/img/sti.png';

// Dados de exemplo para os projetos
const projects = [
  {
    name: 'DIMAp',
    company: 'DIMAp - UFRN',
    image: dimapLogo,
    description: 'Portal do Departamento de Informática e Matemática Aplicada, com informações para alunos, notícias e eventos para deixar a comunidade acadêmica atualizada.',
    technologies: ['Nuxt.js', 'Pug.js', 'Sass', 'Gestore', 'API da UFRN'],
    link: 'https://dimap.ufrn.br',
  },
  {
    name: 'Polare',
    company: 'STI - UFRN',
    image: polareLogo,
    description: 'Sistema disponibilizado na vitrine do MEC como solução para a implementação do Programa de Gestão e Desempenho do Governo Federal.',
    technologies: ['Nuxt.js', 'Pug.js', 'Sass', 'Gestore'],
    link: 'https://polare.ufrn.br/',
  },
  {
    name: 'BES',
    company: 'DIMAp - UFRN',
    image: besLogo,
    description: 'Portal do Bacharelado de Engenharia de Software, com informações para alunos, notícias e eventos para deixar a comunidade acadêmica atualizada.',
    technologies: ['Nuxt.js', 'Pug.js', 'Sass', 'Gestore', 'API da UFRN'],
    link: 'https://dimap.ufrn.br/bes/',
  },
  {
    name: 'SISU',
    company: 'STI - UFRN',
    image: sisuLogo,
    description: 'Site institucional para o SISU UFRN, utilizando o consumo do GESTORE para as informações presentes no site.',
    technologies: ['Nuxt.js', 'Pug.js', 'Sass', 'Gestore'],
    link: 'https://sisu.ufrn.br/',
  },
  {
    name: 'SIA',
    company: 'STI - UFRN',
    image: siaLogo,
    description: 'Site institucional para o SIA - Secretaria de Inclusão e acessibilidade, utilizando o consumo do GESTORE para as informações presentes no site, como também, o site foi desenvolvido com todas as acessibilidades necessárias para qualquer usuário poder utilizar e navegar pelo mesmo.',
    technologies: ['Nuxt.js', 'Pug.js', 'Sass', 'Gestore', 'API da UFRN'],
    link: 'https://sia.ufrn.br',
  },
  {
    name: 'Pós Graduação',
    company: 'STI - UFRN',
    image: posgraduacaoLogo,
    description: 'Sistemas para encontrar informações a respeito dos programas de Pós-Graduação da UFRN, com consumo da API da UFRN.',
    technologies: ['Nuxt.js', 'Pug.js', 'Sass', 'Gestore', 'API da UFRN'],
    link: 'https://posgraduacao.ufrn.br/',
  },
  {
    name: 'Proex',
    company: 'STI - UFRN',
    image: proexLogo,
    description: 'Site institucional para a PROEX, utilizando o consumo do GESTORE para as informações presentes no site.',
    technologies: ['Nuxt.js', 'Pug.js', 'Sass', 'Gestore', 'API da UFRN', 'Tailwind'],
    link: 'https://proex.ufrn.br/',
  },
  {
    name: 'Sisbi',
    company: 'STI - UFRN',
    image: sisbiLogo,
    description: 'Portal do Sistema de Bibliotecas (SISBI) da Universidade Federal do Rio Grande do Norte (UFRN), utilizando o consumo do GESTORE e da API da UFRN para as informações presentes no site.',
    technologies: ['Nuxt.js', 'Pug.js', 'Sass', 'Gestore', 'API da UFRN'],
    link: 'https://sisbi.ufrn.br/',
  },
  {
    name: 'Projetos STI PHP',
    company: 'STI - UFRN',
    image: ecictLogo,
    description: 'Manutenções e otimizações das interfaces de sites, portais utilizando PHP',
    technologies: ['PHP', 'PUG', 'JavaScript'],
    link: 'https://cic.propesq.ufrn.br/',
  },
  {
    name: 'Projetos STI VUE',
    company: 'STI - UFRN',
    image: stiLogo,
    description: 'Manutenções e otimizações das interfaces de sites, portais utilizando o framework vue.js',
    technologies: ['Vue.js', 'Pug.js', 'Sass', 'Gestore', 'API da UFRN'],
    link: 'https://sti.ufrn.br/',
  },
  {
    name: 'Portal UFRN',
    company: 'STI - UFRN',
    image: portalLogo,
    description: 'Portal da Universidade Federal do Rio Grande do Norte com informações para alunos, notícias e eventos para deixar a comunidade acadêmica atualizada.',
    technologies: ['Vue.js', 'Pug.js', 'Sass', 'Gestore', 'API da UFRN'],
    link: 'https://www.ufrn.br/',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.name}
            className="portfolio-item"
            onClick={() => handleProjectClick(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="portfolio-image"
            />
            <p>{project.name}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.company}</p>
            <p>{selectedProject.description}</p>
            <p><strong>Tecnologias:</strong> {selectedProject.technologies.join(', ')}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              Visite o site
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
