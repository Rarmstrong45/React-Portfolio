import React from 'react';

function Footer () {
    return (
        <footer>
            <div className="copyright">
                <p>Copyright &copy; Ryan Armstrong, {(new Date().getFullYear())}</p>
                {/* <p><span className="icon"><i className="fab fa-linkedin"></i></span>{" "}<a href="https://www.linkedin.com/in/ryan-armstrong-9859342b" target="_blank" rel="noreferrer">LinkedIn Profile</a>{" "}
                    <span className="icon"><i className="fab fa-github"></i></span>{" "}<a href="https://github.com/Rarmstrong45" target="_blank" rel="noreferrer">GitHub Profile</a>{" "}
                </p> */}
            </div>
        </footer>
    )
}

export default Footer;