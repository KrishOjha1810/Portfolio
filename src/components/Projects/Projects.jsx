import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import StarryBackground from "../StarryBackground/StarryBackground"
import WanderLust from "../../assets/projects/WanderLust.png";
import Tomato from "../../assets/projects/Tomato.png"
import WeatherWise from "../../assets/projects/WeatherWise.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <StarryBackground />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tomato}
              isBlog={false}
              title="Tomato"
              description="Tomato is a fully responsive food delivery website crafted with the MERN stack, featuring a visually stunning user interface and an exceptional user experience. Designed with seamless navigation in mind, the site allows users to browse menus, place orders, and manage their accounts effortlessly. An integrated admin panel connected to the backend provides seamless control over operations, allowing administrators to manage listings, track orders, and monitor user activity effectively. The application incorporates user authentication and authorization for secure access and personalized interactions. Additionally, it integrates Stripe for a smooth payment processing experience, ensuring that transactions are quick and reliable. The project is built using the MVC architecture, promoting a clean and organized code structure that enhances maintainability and scalability. Everything is deployed for easy access and management."
              ghLink="https://github.com/KrishOjha1810/Food-Delivery"
              demoLink="https://food-delivery-frontend-wnrp.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WanderLust}
              isBlog={false}
              title="WanderLust"
              description="Wander Lust is a full-stack hotel booking website inspired by Airbnb, designed to streamline the process of finding and booking accommodations. Built using MongoDB, HTML, CSS, JavaScript, Node.js, and Express, this application employs the MVC architecture for efficient organization of code and functionality. Key features include user authentication and authorization, allowing for secure account management and personalized experiences. Users can easily search for available hotels, view detailed listings, and make bookings, all within a seamless and user-friendly interface."
              ghLink="https://github.com/KrishOjha1810/WanderLust"
              demoLink="https://minor-project-0xl8.onrender.com/listings"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherWise}
              isBlog={false}
              title="WeatherWise"
              description="This React-based weather forecast web application delivers real-time weather data with a sleek and responsive user interface. Users can search for any location and receive up-to-date information on temperature, humidity, wind speed, and weather conditions. The app integrates with a reliable weather API to provide accurate forecasts for the current day and upcoming week. Designed with intuitive navigation and a visually appealing layout, it ensures a smooth user experience across all devices. This project highlights my proficiency in React, API integration, and creating user-friendly, interactive web applications."
              ghLink="https://github.com/KrishOjha1810/WeatherWise"
              demoLink="https://weather-wise-five-iota.vercel.app/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WanderLust}
              isBlog={false}
              title="Simon Says"
              descripti on="Wander Lust is a full-stack hotel booking website inspired by Airbnb, designed to streamline the process of finding and booking accommodations. Built using MongoDB, HTML, CSS, JavaScript, Node.js, and Express, this application employs the MVC architecture for efficient organization of code and functionality. Key features include user authentication and authorization, allowing for secure account management and personalized experiences. Users can easily search for available hotels, view detailed listings, and make bookings, all within a seamless and user-friendly interface."
              ghLink="https://github.com/KrishOjha1810/WanderLust"
              demoLink="https://minor-project-0xl8.onrender.com/listings"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WanderLust}
              isBlog={false}
              title=""
              description="Wander Lust is a full-stack hotel booking website inspired by Airbnb, designed to streamline the process of finding and booking accommodations. Built using MongoDB, HTML, CSS, JavaScript, Node.js, and Express, this application employs the MVC architecture for efficient organization of code and functionality. Key features include user authentication and authorization, allowing for secure account management and personalized experiences. Users can easily search for available hotels, view detailed listings, and make bookings, all within a seamless and user-friendly interface."
              ghLink="https://github.com/KrishOjha1810/WanderLust"
              demoLink="https://minor-project-0xl8.onrender.com/listings"
            />
          </Col> */}
        </Row>
      </Container>
    
    </Container>
  );
}

export default Projects;
