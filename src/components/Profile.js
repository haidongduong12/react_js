import "../components/profile.css";
import avtImage from "../components/avt.jpg";
function Profile() {
  return (
    <div>
      <header class="header">
        <div class="container">
          <div class="header__top">
            <h1 class="header__title">Elvin Yekayev</h1>
            <nav class="sosial-links">
              <a href="https://www.linkedin.com/in/elvin-yekayev/">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/elvinyeka">
                <i class="fab fa-github-square"></i>
              </a>
              <a href="https://codepen.io/ElvinYeka">
                <i class="fab fa-codepen"></i>
              </a>
              <a href="https://elvinyeka.medium.com/">
                <i class="fab fa-medium"></i>
              </a>
              <a href="elvinyeka@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main class="page-content">
        <div class="container">
          <div class="cover">
            <section class="profile">
              <div class="profile-bg">
                <div class="profile-img">
                  <img src={avtImage} alt="img"></img>
                </div>
                <div class="profile-name">
                  <h2>DONG HAI</h2>
                  <h4> Freelancer Front End Developer</h4>
                </div>
              </div>
            </section>

            <section class="about section">
              <div class="about__summary">
                <h2 class="title">Summary</h2>
                <p>
                  I’m currently working several small web projects (example:
                  <a class="work-link" href="http://speakers.az/">
                    speakers.az
                  </a>
                  <a class="work-link" href="https://dovotes.com/">
                    dovotes.com
                  </a>
                  ).My goal is to learn everything new and exciting. I love to
                  code and coffee. I can(love) spend a lot of time doing what
                  interests me. My core strengths are in problem solving and
                  fast learning.I want to get knowledge and skills that will be
                  enough for employment in a company.
                </p>
              </div>
              <div class="about__info">
                <ul class="about__info-items">
                  <li class="about__info-item--right">Age</li>
                  <li class="about__info-item">20</li>
                  <li class="about__info-item--right">Email</li>
                  <li class="about__info-item">haidongduong26@gmail.com</li>
                  <li class="about__info-item--right">Phone</li>
                  <li class="about__info-item">+84 (0) 33 861 6842</li>
                  <li class="about__info-item--right">Address</li>
                  <li class="about__info-item">
                    Buon Ma Thuot, Dak Lak, Viet Nam
                  </li>
                </ul>
              </div>
            </section>

            <section class="skills section">
              <div class="skills__header">
                <h2 class="title">Professional Skills</h2>
              </div>
              <ul class="skills__items">
                <li class="skills__item">
                  <i class="fab fa-html5"></i>
                  <span>
                    <span>HTML</span> (Semantic, Accessibility)
                  </span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-css3-alt"></i>
                  <span>
                    <span>CSS</span> (Bootstrap, BEM)
                  </span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-sass"></i>
                  <span>
                    <span>SCSS</span> (SMACSS Architecture)
                  </span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-js-square"></i>
                  <span>
                    <span>JavaScript</span> (Fundamentals,Functional
                    Programming, OOP, Asynchronous JavaScript, ES6+,DOM)
                  </span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-react"></i>
                  <span>
                    <span>React JS, Redux</span> (intermediate level knowledge)
                  </span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-git-alt"></i>
                  <span>
                    Version control:<span>Git</span>
                  </span>
                  <i class="fab fa-github"></i>
                  <span>
                    <span>GitHub</span>
                  </span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-gulp"></i>
                  <span>Module Bundlers:</span>
                  <span>Gulp, Webpack</span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-python"></i>
                  <span>
                    <span>Python</span>( basic knowledge)
                  </span>
                  <span>
                    <span>C</span>(basic knowledge)
                  </span>
                  <span>
                    <span>Flask</span>(basic knowledge)
                  </span>
                  <span>
                    <span>SQLite</span> (basic knowledge)
                  </span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-windows"></i>
                  <span>
                    <span>Windows</span>,
                  </span>
                  <i class="fab fa-ubuntu"></i>
                  <span>
                    <span>Linux</span> (Ubuntu)
                  </span>
                </li>
                <li class="skills__item">
                  <i class="fab fa-figma"></i>
                  <span>Figma</span>(for web development)
                </li>
                <li class="skills__item">
                  <i class="fas fa-laptop-code"></i>
                  <span>Editors: </span>
                  <span>Sublime</span>
                  <span>Brackets</span>
                  <span>VS Code</span>
                  <span>PyCharm Community</span>
                </li>
              </ul>
            </section>

            <section class="edu section">
              <div class="edu__inner">
                <h2 class="title">Education</h2>
              </div>
              <div class="edu__timeline">
                <div class="edu__timeline-card card-success">
                  <div class="card-body">
                    <div class="edu-head">
                      Azerbaijan State Pedagogical University
                      <span class="text-small">Bachelor,Baku city</span>
                    </div>
                    <div class="edu-time">2002 - 2009</div>
                    <div>Faculty of Mathematics. Bachelor degree.</div>
                  </div>
                </div>
              </div>
              <div class="edu__timeline">
                <div class="edu__timeline-card card-success">
                  <div class="card-body">
                    <div class="edu-head">IT-City Academy</div>
                    <div>
                      Basic knowledge of programming and algorithm knowledge
                      using C language.
                    </div>
                  </div>
                </div>
              </div>
              <div class="edu__timeline">
                <div class="edu__timeline-card card-success">
                  <div class="card-body">
                    <div class="edu-head">Ecma-Code Education</div>
                    <div>
                      Basic and advanced knowledge of web development knowledge
                      using JavaScript and React JS.
                    </div>
                  </div>
                </div>
              </div>
              <div class="edu__timeline">
                <div class="edu__timeline-card card-success">
                  <div class="card-body">
                    <div class="edu-head">Pragmatech Education</div>
                    <div>
                      Introduction to programming,Algorithms, Pseudocode,
                      Syntax, Data Types, Operators. Booleans, CommandLine
                      Interaction, Functions
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="edu section">
              <div class="edu__inner">
                <h2 class="title">Experience</h2>
              </div>
              <div class="edu__timeline">
                <div class="edu__timeline-card card-success">
                  <div class="card-body">
                    <div class="edu-head">Small own business</div>
                    <div class="edu-time">2014 - Present</div>
                    <div>Fast-food delivery(Since 2014)</div>
                  </div>
                </div>
              </div>
              <div class="edu__timeline">
                <div class="edu__timeline-card card-success">
                  <div class="card-body">
                    <div class="edu-head">Freelancer</div>
                    <div class="edu-time">February 2021 - Present</div>
                    <div>
                      I have little experience in JS and Frontend development. I
                      have worked in the team on several small projects and
                      currently working with team.Some of this projects:
                      <a class="work-link" href="http://speakers.az/">
                        speakers.az
                      </a>
                      <a class="work-link" href="https://dovotes.com/">
                        dovotes.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="edu section">
              <div class="edu__inner">
                <h2 class="title">Languages</h2>
              </div>
              <div class="edu__timeline">
                <div class="edu__timeline-card card-success">
                  <div class="card-body">
                    <div class="edu-head">
                      Azerbaijan <span class="text-small">[Native]</span>
                    </div>
                    <div class="edu-head">
                      Turkish{" "}
                      <span class="text-small">[Upper Intermediate]</span>
                    </div>
                    <div class="edu-head">
                      Russian <span class="text-small">[Intermediate]</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="edu__timeline">
                <div class="edu__timeline-card card-success">
                  <div class="card-body">
                    <div class="edu-head">English</div>
                    <div class="mb-1">
                      StreamLine Language School English test result:
                      <span class="bold ">Pre-Intermediate(CEFR A2+)</span>.
                    </div>
                    <div class="mb-1">
                      EPAM English test result: <span class="bold">A1</span>
                    </div>
                    <div class="mb-1">
                      I try to learn English in every possible way. I use
                      application in smartphone: Duolingo and I use google
                      translate a lot.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
