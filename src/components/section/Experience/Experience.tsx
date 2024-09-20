import './Experience.scss';

const experienceData = [
  {
    role: 'Desenvolvedor Front-End',
    company: 'Tech Company XYZ',
    period: 'JANEIRO DE 2022 - ATUALMENTE',
    activities: [
      'Desenvolvimento de interfaces responsivas utilizando React e TypeScript',
      'Implementação de design system para padronizar componentes',
      'Integração de APIs RESTful para exibição de dados dinâmicos',
    ],
  },
  {
    role: 'Desenvolvedor Back-End',
    company: 'Solutions Inc.',
    period: 'JANEIRO DE 2020 - DEZEMBRO DE 2021',
    activities: [
      'Desenvolvimento de APIs em Node.js',
      'Criação de banco de dados NoSQL (MongoDB) e SQL',
      'Implementação de testes unitários e de integração',
    ],
  },
  {
    role: 'Estagiário de Desenvolvimento',
    company: 'StartUp ABC',
    period: 'JANEIRO DE 2019 - DEZEMBRO DE 2019',
    activities: [
      'Suporte ao desenvolvimento de aplicações web',
      'Correção de bugs e otimização de performance',
      'Participação em reuniões de planejamento ágil (Scrum)',
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
