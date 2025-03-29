import program from "../assets/images/program.jpg";
import program1 from "../assets/images/program1.jpg";
import program2 from "../assets/images/program2.jpg";
import program3 from "../assets/images/program3.jpg";
import program4 from "../assets/images/program4.jpg";
import program5 from "../assets/images/program5.jpg";
import program6 from "../assets/images/program6.jpg";

function Recommended() {
    return (
        <div>
            <h1>Recommended</h1>
            <br />
            <div className="recommended">
                <div className="courseselect">
                    <img src={program1} alt="image" />
                    <h3>Python with Machine Learning</h3>
                    <p>Devin</p>
                    <p>4.8 ⭐⭐⭐⭐⭐</p>
                    <p><del>$35</del> $30</p>
                </div>

                <div className="courseselect">
                    <img src={program2} alt="image" />
                    <h3>Python with Deep Learning</h3>
                    <p>Bern</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>$80</p>
                </div>

                <div className="courseselect">
                    <img src={program3} alt="image" />
                    <h3>Python</h3>
                    <p>Devin</p>
                    <p>4.8 ⭐⭐⭐</p>
                    <p>$10</p>
                </div>

                <div className="courseselect">
                    <img src={program4} alt="image" />
                    <h3>Python with AI</h3>
                    <p>Yazhini</p>
                    <p>4.8 ⭐⭐⭐⭐⭐</p>
                    <p>$130</p>
                </div>

                <div className="courseselect">
                    <img src={program5} alt="image" />
                    <h3>Java with Swing</h3>
                    <p>Devin</p>
                    <p>4.8 ⭐⭐⭐</p>
                    <p>$30</p>
                </div>

                <div className="courseselect">
                    <img src={program6} alt="image" />
                    <h3>R with Data Analysis</h3>
                    <p>Bern</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>$80</p>
                </div>

                <div className="courseselect">
                    <img src={program3} alt="image" />
                    <h3>Frontend</h3>
                    <p>Devin</p>
                    <p>4.8 ⭐⭐⭐⭐⭐</p>
                    <p>$10</p>
                </div>

                <div className="courseselect">
                    <img src={program} alt="image" />
                    <h3>R with ML</h3>
                    <p>Yazhini</p>
                    <p>4.8 ⭐⭐⭐</p>
                    <p>$130</p>
                </div>

                <div className="courseselect">
                    <img src={program3} alt="image" />
                    <h3>Python with Machine Learning</h3>
                    <p>Devin</p>
                    <p>4.8 ⭐⭐⭐</p>
                    <p><del>$35</del> $30</p>
                </div>

                <div className="courseselect">
                    <img src={program4} alt="image" />
                    <h3>Python with Deep Learning</h3>
                    <p>Bern</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>$80</p>
                </div>
            </div>
        </div>
    );
}

export default Recommended;
