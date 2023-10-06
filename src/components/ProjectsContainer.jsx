const ProjectsContainer = () => {
    return (
      <section className="projects-container">
        <h2>Projetos</h2>
        <p>
            Todos os projetos citados estão disponiveis no meu github
            </p>

            <p>
        Esses projetos foram desenvolvidos por mim enquanto eu ainda estava aprendendo a programar. 
        Eles são simples e não têm muitos recursos, mas foram úteis para mim para praticar minhas habilidades
        e aprender novos conceitos e fixar conceitos que ja sabia.
        </p>
        <p>
        Projeto seriados em java:
            esse projeto foi desenvolvido em Java utilizando Spring boot os conceitos desse projeto
            foram aprendidos em uma cadeira do meu curso de analise e desenvolvimento de sistemas onde
            atualmente sou o monitor dela.
            </p>
            <p>
        projeto animes em HTML css e JavaScript:
            esse projeto foi desenvolvido com base em um mini curso dado pelo dev em dobro no youtube
            ele foi adaptado por mim
        </p>
        <a href="https://github.com/rafarecem" className="btn">
          Ver Projetos
        </a>
      </section>
    );
  };
  
  export default ProjectsContainer;