import React from 'react';
import './App.scss';
import $ from "jquery";
import TweenMax from "gsap";
import { Power0} from "gsap";

class Screen4 extends React.Component {
  state={
    name:'',
    email: '',
    subject: '',
    message: ''
  }
  handleSubmit(e){
    e.preventDefault();
        var data = new URLSearchParams();
        for(const pair of new FormData(e.target)){
            // console.log(pair)
          data.append(pair[0],pair[1])
        }
        fetch('/send',{
            method:"post",
            body:data,
        }).then(res=>res.json())
        .then(res2 => console.log(res2)); 
  }
  render() {
      return (
          <div id="contact" className="screen">

                  <h1 className="h1-responsive contact_me">Contact Me</h1>
                  <p className=" w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will shortly reply to you. Thanks</p>
                  <div className="row">
                      <div className="col-md-9 mb-md-0 mb-5">
                          <form id="contact-form" name="contact-form" onSubmit={(e) => this.handleSubmit(e)} action="mail.php" method="POST">
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="md-form mb-0">
                                      <label className="">Your name
                                          </label><input type="text" id="name" name="name" className="form-control" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="md-form mb-0">
                                      <label className="">Your email</label>
                                          <input type="text" id="email" name="email" className="form-control" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-md-12">
                                      <div className="md-form mb-0">
                                      <label htmlFor="subject" className="">Subject</label>
                                          <input type="text" id="subject" name="subject" className="form-control" value={this.state.subject} onChange={(e) => this.setState({subject: e.target.value})}/>
                                      </div>
                                  </div>
                              </div>

                              <div className="row">

                                  <div className="col-md-12">

                                      <div className="md-form">
                                      <label htmlFor="message">Your message</label>
                                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}></textarea>
                                      </div>
                                  </div>
                              </div>
                              <div className=" text-md-left">
                              <a className="btn" ><button type="submit">Send</button></a>
                          </div>
                          </form>
                          <div className="status"></div>
                      </div>

                      <div className="col-md-3 ">
                          <ul className="list-unstyled mb-0">
                              <li><i className="fa fa-phone mt-4 fa-2x"></i>
                                  <p>+ 01 437 236 6838</p>
                              </li>

                              <li><i className="fa fa-envelope mt-4 fa-2x"></i>
                                  <p>niteshbansal30@gmail.com</p>
                              </li>
                          </ul>
                      </div>

                  </div>
          </div>
      )
  }
}

class Screen3 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          projects: [
              {
                  id: 0,
                  link: "http://nitesh-bansal.com/capstone",
                  showMe: false,
                  heading: "Ayurveda Website",
                  description: "Website made using flask on back-end rendering the data from postgreSQL that lives on Heroku and templating it using Jinja2.",
                  photolink: "./logos/capstone.png",
                  technologies: ["Flask", "PostgreSQL", "Jinja-2", "Bootstrap"]
              },{
                  id:2,
                  link: "http://nitesh-bansal.com/projects/project8/",
                  showMe: false,
                  heading: "Easy Groceries",
                  description: "An online grocery store website made to provide the customers a great interface to buy groceries.",
                  photolink: "./logos/project8.png",
                  technologies: ["PHP", "MySQL", "Ajax", "JavaScript"]
              }, {
                  id: 3,
                  link: "http://nitesh-bansal.com/projects/project1",
                  showMe: false,
                  heading: "SVG Page",
                  description: "A SVG project made from scratch. Designed, coded and animated.",
                  photolink: "./logos/project1.png",
                  technologies: ["HTML", "CSS", "Jquery"]
              },
              {
                  id:4,
                  link: "http://nitesh-bansal.com/projects/project2/",
                  showMe: false,
                  heading: "Animated Infographics",
                  description: "An Animated Infographics made using Jquery.",
                  photolink: "./logos/project2.png",
                  technologies: ["HTML", "CSS", "Jquery"]
              }, {
                  id:5,
                  link: "http://nitesh-bansal.com/projects/project3/",
                  showMe: false,
                  heading: "Mobile Restaurant App",
                  description: "A Restaurant app made Using Javascript.",
                  photolink: "./logos/project3.png",
                  technologies: ["HTML", "CSS", "Jquery"]
              }, {
                  id:6,
                  link: "http://nitesh-bansal.com/projects/project4/",
                  showMe: false,
                  heading: "Mad Movies",
                  description: "A Movie Website coded to fetch the data from database.",
                  photolink: "./logos/project4.png",
                  technologies: ["PHP", "MySQL", "Ajax", "JavaScript"]
              }, {
                  id:7,
                  link: "http://nitesh-bansal.com/projects/project5/",
                  showMe: false,
                  heading: "D3 Chart",
                  description: "A bar chart made with D3.js and npm",
                  photolink: "./logos/project5.png",
                  technologies: ["NodeJs", "D3.Js", "HTML", "CSS"]
              }, {
                  id:8,
                  link: "https://wpproject.nitesh-bansal.com/nev_freshBeauty/about/",
                  showMe: false,
                  heading: "Fresh Beauty",
                  description: "A wordpress website made using E-commerce for beauty products.",
                  photolink: "./logos/project6.png",
                  technologies: ["Wordpress", "WooCom", "Jquery", "JavaScript"]
              }, {
                  id:9,
                  link: "http://nitesh-bansal.com/projects/project7/",
                  showMe: false,
                  heading: "MythBuster - Clinical Trials",
                  description: "A collaborative project for Lakeridge Health about myths and facts of clinical Trials.",
                  photolink: "./logos/project7.png",
                  technologies: ["HTML", "CSS", "Webpack", "JavaScript"]
              }
          ]
      }
      this.showDiv = this.showDiv.bind(this);
      }
  showDiv(id){
          const data = this.state.projects;
          console.log(data);
  }
  render() {
      const projects = this.state.projects;
      const projectDiv = projects.map((project, id) => {
        const technologies = project.technologies
        const technologyy = technologies.map((technology) => {
          return(<li>{technology}</li>)
        })
          return (
            <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                    <div className="shadow card" style={{ width: "auto" }}>
                        <div className="d-flex card-content flex-column justify-content-between">
                        <div>
                        <h5 className="card-title">{project.heading}</h5>
                        <p className="card-text">{project.description}</p></div>
                        <div>
                        
                        <div id="table">
                        <ul id="horizontal-list">
                          {technologyy}
                        </ul>
                        </div>
                        <a href={project.link}><button className="btn mt-auto">See project</button></a></div>
                        </div>
                </div>
                </div>
                  );
      
      });
      return (
        <div id="projects">
        <h1>My Projects</h1>
        <div className="container">
            <div className="row justify-content-around">
                {projectDiv}
            </div>
        </div>
    </div>
      )
  }
}



class Screen1 extends React.Component {
  
  render() {
      const aboutMe = this.props.about;
      const aboutList = aboutMe.map((about, id) => {
          return(
              <div className="about_paragraph" key={id}>{about}</div>
          )
      })
      return (
          <div id="about" className="screen">
            <h1>About Me</h1>
            <div id="about_me">
              <div id="about_info">{aboutList}</div>
              <img alt="some 1" className="myphoto" src="./logos/myphoto1.jpg" />
            </div>
          </div>
      )
  }
}

class Screen0 extends React.Component {
  componentDidMount(){
    TweenMax.from("#name", {
      y: 20,
      opacity: 0,
      delay: 5.3
    })
    TweenMax.from("#hi", {
      y: 20,
      opacity: 0,
      delay: 5.3
    })
    TweenMax.from("#occupation, #quick_info", {
      y: 20,
      opacity: 0,
      delay: 5.5
    })
    TweenMax.from("button", {
      scale: 0,
      opacity: 0,
      delay: 5.6
    })
  }
  render() {
      return (
          <div id="screen0" className="screen">
              <div id="hi">Hi! <span role="img">👋,</span></div>
              <div id="name">I am <span id="fullname">Nitesh Bansal.</span></div>
              <div id="occupation">Web Developer/Designer</div>
              <div id="quick_info">A web Developer/Designer based in Toronto, CA demonstrating talent for front and back-end web development to optimize online presence with broad experience in Javascript, Python and many of their frameworks and libraries.</div>
              <div id="my_work">
              <a href="#projects"><button>Work</button></a>
              <a href="./resume.pdf"><button id="resume">Resume</button></a>
              </div>
          </div>
      )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      apiResponse :"",
      aboutme: [
        `Hello, I am Nitesh Bansal. A recent graduate from Durham College in Conteporary Web Design looking for a position as a Jr. Web Developer to utilize my skills that can make a positive impact on the world.`,
        "Excelled in languages such as JavaScript, Python and C, I posses great debugging skills and superb work ethics. I am profoundly knowledged in many front-end and back-end libraires and frameworks such as Django, Flask, NodeJS, React and many more.",
    "You can contact me through social media or leave a message on the website."
    ]
    }
    
  }
  componentDidMount(){
    $('#all-content').hide(0).delay(5000).show(0);

    $('#loader').show(0).delay(5000).hide(0);
    TweenMax.to("#loader", 2, {rotation:-360,
      transformOrigin:"50%", repeat:2, repeatDelay:-.1, ease: Power0.easeNone})
    TweenMax.from(("#logo"), {
      scale: 0.5,
      delay: 5.2
    })
    TweenMax.from((".dxVzdv"),{
      opacity: 0,
      y: 20,
      delay: 5.35
    })
    TweenMax.from(("header"),{
      y: -20,
      opacity: 0,
      delay: 5.23
    })
  }
  closeNav(e) {
    e.preventDefault();
    document.getElementById("myNav").style.width = "0%";
  }
  openNav(e){
    e.preventDefault();
    document.getElementById("myNav").style.width = "100%";
  }

  
render() {
  return (
    <div className="App">
      <img alt="some 2" id="loader" src="./logos/loader.png" />
      <div id="all-content">
      <header className="App-header">
        <div id="logo"><img alt="some 3" src="./logos/logo.png" /></div>
          <div>
            <nav className="navbar navbar-expand-lg">
              <button id="toggler-btn" className=" hide" onClick={this.openNav}>&#9776;</button>
              <div id="myNav" className="overlay">
              <a className="closebtn hide" href="" onClick={this.closeNav}>&times;</a>
                  <ul className="navbar-nav overlay-content">
                    <li className="nav-item">
                      <a className="nav-link" href="/#"><i className="fa fa-fw fa-home"></i>Home</a>
                    </li>
                    <li className="nav-item"  >
                      <a className="nav-link" href="/#about" onClick= {this.closeNava}><i className="fa fa-fw fa-info"></i>About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#projects" onClick={this.closeNava}><i className="fa fa-fw fa-tasks"></i>Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#contact" onClick={this.closeNava}><i className="fa fa-fw fa-envelope"></i>Contact Me</a>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
      </header>
      <div orientation="left" className="side__StyledContainer-sc-1duznzb-0 dxVzdv">
        <ul className="social__StyledList-anu6nt-0 cJDQMh fade-enter-done">
          <li>
            <a href="https://github.com/bansalnitesh" rel="nofollow noopener noreferrer" aria-label="GitHub" className="social__StyledLink-anu6nt-1 jZDtYm">
              <i className="fa fa-fw fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nitesh-b-15bb03a7" target="_blank" rel="nofollow noopener noreferrer" aria-label="Linkedin" className="social__StyledLink-anu6nt-1 jZDtYm">
              <i className="fa fa-fw fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/default_as_drunken/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Instagram" className="social__StyledLink-anu6nt-1 jZDtYm">
            <i className="fa fa-fw fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100008090358835/" target="_blank" rel="nofollow noopener noreferrer" aria-label="Facebook" className="social__StyledLink-anu6nt-1 jZDtYm">
            <i className="fa-fb fa fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
      <div id="content">
      <section><Screen0 /></section>
      <section><Screen1 about={this.state.aboutme}/></section>
      <section><Screen3 /></section>
      <section><Screen4 /></section>
      </div>
      <footer className="page-footer font-small unique-color-dark">
                <div className="d-flex social-div">
                      <a className="fb-ic" href="https://www.facebook.com/profile.php?id=100008090358835">
                          <i className="fa fa-facebook-f fa-lg white-text fa-2x"> </i>
                      </a>
                      <a className="tw-ic" href="https://twitter.com/Niteshb56496336">
                          <i className="fa fa-twitter fa-lg white-text fa-2x"> </i>
                      </a>
                      <a className="gplus-ic" href="https://github.com/bansalnitesh">
                          <i className="fa fa-github fa-lg white-text fa-2x"> </i>
                      </a>
                      <a className="li-ic" href="https://www.linkedin.com/in/nitesh-b-15bb03a7">
                          <i className="fa fa-linkedin fa-lg white-text fa-2x"> </i>
                      </a>
                      <a className="ins-ic" href="https://www.instagram.com/default_as_drunken">
                          <i className="fa fa-instagram fa-lg white-text fa-2x"> </i>
                      </a>
              </div>
              <div className="footer-copyright text-center">© 2020 Copyright:
                <a href="https://nitesh-bansal.com/"> Nitesh-bansal.com</a>
              </div>
            </footer>
    </div>
    </div>
  );
}
}


export default App;
