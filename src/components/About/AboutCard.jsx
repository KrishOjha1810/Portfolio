import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krish Ojha</span>
            from <span className="purple">Indore, Madhya Pradesh.</span>
            <br />
            I am currently a Fresher looking for a Job.
            <br />
            I graduated with a B.Tech in Computer Science from Acropolis Institute of Technology And Research, Indore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dance
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness(Gym)
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."{""}
          </p>
          <footer className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
