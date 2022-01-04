import React from "react";
import Calendar from "react-calendar";
import "../../styles/home/homeDefault.scss";

const HomeDefault: React.FC = () => {
  return (
    <div className="homeDefault">
      <div className="content">
        <section className="workspace_favorites">
          <section className="favorites">
            <header className="homeDefaultHeader">
              <h4>Workspace : 10</h4>
              <i className="fa fa-plus"></i>
            </header>
            <div className="projects">
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
            </div>
          </section>
          <section className="workspace">
            <header className="homeDefaultHeader">
              <h4>Workspace : 10</h4>
              <i className="fa fa-plus"></i>
            </header>
            <div className="projects">
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
              <div className="project">
                <h3>PetPals</h3>
              </div>
            </div>
          </section>
        </section>
        <section className="taskDue">
          <Calendar />
        </section>
      </div>
    </div>
  );
};

export default HomeDefault;
