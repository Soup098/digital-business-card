const root = ReactDOM.createRoot(document.getElementById('root'))

function Info() {
    return (
        <div className="info-container">
            <img className="portrait" src="./images/alex.jpg"/>
            <div className="title-container">
                <h1>Alex Surprenant</h1>
                <h2>Full Stack Developer</h2>
                <p>alex.soup89@gmail.com</p>
            </div>
            <div className="btn-container">
                <button className="email-btn"><img className="email-icon" src="./images/email.png"/>Email</button>
                <button className="linkedin-btn"><img className="linkedin-icon" src="./images/linkedin.png"/>Linkedin</button>
            </div>
        </div>
            
    )
}

function About(){
    return(
        <div className="about-container">
            <h1>About</h1>
            <p>I am a full-stack developer with an interest in creating secure code that is a un-hackable as possible.
                 I also like to focus on UI/UX design.
                  I am always focused on what comes next. </p>
        </div>
    )
}

function Interests(){
    return(
        <div className="interests-container">
            <h1>Interests</h1>
            <p>Snowboarding. Drumming. Coding. Playing with my dogs. Travel. Gaming.</p>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">
            <img className="social-icon" src="./images/twitter.png"/>
            <img className="social-icon" src="./images/facebook.png"/>
            <img className="social-icon" src="./images/instagram.png"/>
            <img className="social-icon" src="./images/github.png"/>
        </div>
    )
}

root.render(
    <div className="card-container">
       <Info />
       <About />
       <Interests />
       <Footer />
    </div>
)