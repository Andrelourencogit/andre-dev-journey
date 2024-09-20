import { useState } from 'react';
import './Skill.scss';

// Importação dos ícones
import bootstrapLogo from '../../../assets/icons/bootstrap.svg';
import cssLogo from '../../../assets/icons/css.svg';
import emailLogo from '../../../assets/icons/email.svg';
import figmaLogo from '../../../assets/icons/figma.svg';
import gitLogo from '../../../assets/icons/git.svg';
import githubLogo from '../../../assets/icons/github.svg';
import htmlLogo from '../../../assets/icons/html.svg';
import jsLogo from '../../../assets/icons/js.svg';
import laravelLogo from '../../../assets/icons/laravel.svg';
import linkedinLogo from '../../../assets/icons/linkedin.svg';
import nextjsLogo from '../../../assets/icons/nextjs.svg';
import nodeLogo from '../../../assets/icons/nodejs.svg';
import npmLogo from '../../../assets/icons/npm.svg';
import nuxtLogo from '../../../assets/icons/nuxt.svg';
import phpLogo from '../../../assets/icons/php.svg';
import pugLogo from '../../../assets/icons/pug.svg';
import reactLogo from '../../../assets/icons/react.svg';
import sassLogo from '../../../assets/icons/sass.svg';
import tailwindLogo from '../../../assets/icons/tailwind.svg';
import typescriptLogo from '../../../assets/icons/typescript.svg';
import vueLogo from '../../../assets/icons/vue.svg';
import vuetifyLogo from '../../../assets/icons/vuetify.svg';

// Dados das habilidades com nome, imagem, descrição e nível de conhecimento
const skillsData = [
  { 
    name: 'React', 
    image: reactLogo, 
    description: 'Biblioteca JavaScript para construção de interfaces de usuário.', 
    level: 'Especialista! possuo mais de 2 anos de experiência.' 
  },
  { 
    name: 'Vue.js', 
    image: vueLogo, 
    description: 'Framework JavaScript progressivo para construção de interfaces de usuário.', 
    level: 'Especialista! possuo mais de 5 anos de experiência.' 
  },
  { 
    name: 'Nuxt.js', 
    image: nuxtLogo, 
    description: 'Framework baseado em Vue.js para criação de aplicações universais.', 
    level: 'Especialista! possuo mais de 5 anos de experiência.' 
  },
  { 
    name: 'Next.js', 
    image: nextjsLogo, 
    description: 'Framework React para aplicações otimizadas e renderização no servidor.', 
    level: 'Avançado' 
  },
  { 
    name: 'TypeScript', 
    image: typescriptLogo, 
    description: 'Superset de JavaScript que adiciona tipagem estática.', 
    level: 'Avançado' 
  },
  { 
    name: 'JavaScript', 
    image: jsLogo, 
    description: 'Linguagem de programação usada no desenvolvimento web.', 
    level: 'Especialista! possuo mais de 5 anos de experiência.' 
  },
  { 
    name: 'Vuetify', 
    image: vuetifyLogo, 
    description: 'Framework baseado em Vue.js para criação de interfaces responsivas.', 
    level: 'Avançado' 
  },
  { 
    name: 'Bootstrap', 
    image: bootstrapLogo, 
    description: 'Framework CSS usado para desenvolver sites responsivos.', 
    level: 'Avançado' 
  },
  { 
    name: 'CSS', 
    image: cssLogo, 
    description: 'Linguagem de estilos usada para definir o layout e o design de páginas web.', 
    level: 'Especialista! possuo mais de 5 anos de experiência.' 
  },
  { 
    name: 'Git', 
    image: gitLogo, 
    description: 'Sistema de controle de versão amplamente utilizado.', 
    level: 'Especialista! possuo mais de 5 anos de experiência.' 
  },
  { 
    name: 'HTML', 
    image: htmlLogo, 
    description: 'Linguagem de marcação padrão para criar páginas web.', 
    level: 'Especialista! possuo mais de 5 anos de experiência.' 
  },
  { 
    name: 'Laravel', 
    image: laravelLogo, 
    description: 'Framework PHP para desenvolvimento rápido e eficiente de aplicações web.', 
    level: 'Avançado' 
  },
  { 
    name: 'Node.js', 
    image: nodeLogo, 
    description: 'Ambiente JavaScript de execução no lado do servidor.', 
    level: 'Avançado' 
  },
  { 
    name: 'NPM', 
    image: npmLogo, 
    description: 'Gerenciador de pacotes para JavaScript.', 
    level: 'Especialista' 
  },
  { 
    name: 'PHP', 
    image: phpLogo, 
    description: 'Linguagem de programação focada em desenvolvimento backend.', 
    level: 'Básico' 
  },
  { 
    name: 'Pug', 
    image: pugLogo, 
    description: 'Template engine para criar HTML simplificado.', 
    level: 'Especialista' 
  },
  { 
    name: 'Figma', 
    image: figmaLogo, 
    description: 'Ferramenta de design colaborativo para criação de interfaces de usuário.', 
    level: 'Intermediário' 
  },
  { 
    name: 'Sass', 
    image: sassLogo, 
    description: 'Pré-processador CSS que adiciona funcionalidades como variáveis e mixins.', 
    level: 'Especialista' 
  },
  { 
    name: 'Tailwind', 
    image: tailwindLogo, 
    description: 'Framework CSS utilitário para construção rápida de layouts customizados.', 
    level: 'Básico' 
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleClick = (skillName: string) => {
    setSelectedSkill(skillName);
  };

  const selectedSkillData = skillsData.find(skill => skill.name === selectedSkill);

  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <div className="skills-container">
        <div className="skills-list">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className={`skill-item ${selectedSkill === skill.name ? 'active' : ''}`}
              onClick={() => handleClick(skill.name)}
            >
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="skill-description">
          {selectedSkill ? (
            <>
              <h3>{selectedSkillData?.name}</h3>
              <p><strong>Nível:</strong> {selectedSkillData?.level}</p>
              <p>{selectedSkillData?.description}</p>
            </>
          ) : (
            <p>Selecione uma habilidade para ver a descrição.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
