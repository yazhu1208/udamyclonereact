import program from "../assets/images/program.jpg";
import program1 from "../assets/images/program1.jpg";
import program2 from "../assets/images/program2.jpg";
import program3 from "../assets/images/program3.jpg";
import program4 from "../assets/images/program4.jpg";
import program5 from "../assets/images/program5.jpg";
import program6 from "../assets/images/program6.jpg";

function Suggestion (){
    return (
        <div className="popular">
            <h1 className="popular__title">Most Popular</h1>
            <p className="popular__subtitle">Pick the best fit</p>

            <div className="recommended">
                <div className="courseselect">
                    <img src={program} alt="Python Data Visualization" />
                    <h3>2023 Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9 {"⭐⭐⭐⭐"}</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={program1} alt="Programming with EMC" />
                    <h3>Basic to Advance Programming with EMC</h3>
                    <p>Col Steele</p>
                    <p>3.9 {"⭐⭐⭐"}</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={program2} alt="Web Development Bootcamp" />
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col Steele</p>
                    <p>4.9 {"⭐⭐⭐⭐"}</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={program3} alt="UI/UX Designing with Figma" />
                    <h3>Master UI/UX Designing with Figma</h3>
                    <p>Col Steele</p>
                    <p>4.9 {"⭐⭐⭐⭐"}</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={program6} alt="Web Development Bootcamp" />
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col Steele</p>
                    <p>4.9 {"⭐⭐⭐⭐"}</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={program4} alt="Python Data Visualization" />
                    <h3>2023 Python Data Visualization Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9 {"⭐⭐⭐⭐"}</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div className="course-card">
                    <img src={program5} alt="Web Development Bootcamp" />
                    <h3>Web Development Bootcamp 2023</h3>
                    <p>Col Steele</p>
                    <p>4.9 {"⭐⭐⭐⭐"}</p>
                    <p>449 <del>1999</del></p>
                </div>
            </div>
        </div>
    );
}

export default Suggestion

