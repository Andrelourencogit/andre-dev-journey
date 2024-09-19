import './Education.scss';

const educationData = [
  {
    institution: 'Universidade Federal do Rio Grande Do Norte (UFRN) | Natal/RN',
    course: 'Bacharel em Engenharia de Software',
    period: 'JANEIRO DE 2022 - ATUALMENTE',
  },
  {
    institution: 'Instituto Metrópole Digital (IMD) | Natal/RN',
    course: 'Curso Técnico de Redes',
    period: 'JANEIRO DE 2020 - DEZEMBRO DE 2021',
  },
  {
    institution: 'Universidade Federal do Rio Grande Do Norte (UFRN) | Natal/RN',
    course: 'Bacharel em Tecnologia da Informação',
    period: 'JANEIRO DE 2017 - DEZEMBRO DE 2021',
  },
];

const Education = () => {
  return (
    <section id="formacao" className="formacao">
      <h2>Formação</h2>
      <div className="education-content">
        {educationData.map((edu, index) => (
          <div className="school-info" key={index}>
            <h3>{edu.institution}</h3>
            <p className="course">{edu.course}</p>
            <p className="year">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
