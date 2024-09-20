import './Experience.scss';

const experienceData = [
  {
    role: 'Desenvolvedor Front-End - Quality Assurance',
    company: 'DZ LABS - Curitiba',
    period: 'ABRIL DE 2024 - ATUALMENTE',
    activities: [
      'Desenvolvimento de interfaces responsivas utilizando React e TypeScript;',
      'Implementação de design system para padronizar componentes;',
      'Integração de APIs RESTful para exibição de dados dinâmicos.',
    ],
  },
  {
    role: 'Desenvolvedor Front-End - Bolsista',
    company: 'Superintendência de TI | UFRN',
    period: 'SETEMBRO DE 2020 - ATUALMENTE',
    activities: [
      'Realizar manutenções, construções e otimizações das interfaces de sites, portais utilizando Nuxt.js e Vue.js;',
      'Realizar manutenções e otimizações das interfaces de sites, portais utilizando PHP;',
      'Acompanhamento da equipe Nuxt.Js com reuniões semanais para repasse aos lideres;',
      'Realizar palestras sobre tecnologias aos demais membros denominados tech talk;',
      'Ajudar os demais membros e outras equipes com dificuldades relacionadas às tecnologias usadas pela equipe de front, como também, sobre os componentes construídos pela equipe.',
    ],
  },
  {
    role: 'Desenvolvedor Front-End - Bolsista',
    company: 'DIMAp | UFRN',
    period: 'JANEIRO DE 2019 - ABRIL DE 2024',
    activities: [
      'Realizar manutenções, construções e otimizações das interfaces de sites, portais utilizando Nuxt.js e Vue.js;',
      'Criar layouts e designs de páginas web, focando na experiência do usuário.',
      'Criar conteúdo visual e textual para redes sociais(Página do facebook e Instagram), contribuindo para campanhas e divulgação.',
      'Administrar e gerenciar o sistema de gestão de conteúdo (GESTORE) para sites;',
    ],
  },
];

const Experiences = () => {
  return (
    <section id="experiencias" className="experiences">
      <h2>Experiências</h2>
      <div className="experience-content">
        {experienceData.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3 className="role">{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="period">{exp.period}</p>
            <ul className="activities">
              {exp.activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
