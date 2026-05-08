import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const subject = encodeURIComponent(
    "Hello Brandon, I would like to work with you",
  );
  return (
    <div className="fixed flex flex-col top-1/2 -translate-y-1/2 left-2 gap-4 [&>button]:cursor-pointer mix-blend-difference text-white">
      <a href="https://github.com/Marquez594" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="xl"></FontAwesomeIcon>
      </a>
      <a href={`mailto:bmarquez1594@gmail.com?subject=${subject}`}>
        <FontAwesomeIcon icon={faEnvelope} size="xl"></FontAwesomeIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/brandon-marquez-7b85b9254/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl"></FontAwesomeIcon>
      </a>
    </div>
  );
}

export default Contact;
