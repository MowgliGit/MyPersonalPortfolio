import React from "react";
import styles from "../styles/Skill.module.css";
import { Link } from "react-router-dom";
import "../App.css";
const skills = [
  { name: "HTML", progress: "100%" },
  { name: "CSS", progress: "95%" },
  { name: "Bootstrap", progress: "95%" },
  { name: "JavaScript", progress: "65%" },
  { name: "React", progress: "60%" },
  { name: "Sass", progress: "75%" },
  { name: "GitHub", progress: "75%" },
  { name: "Web Design", progress: "85%" },
  { name: "English", progress: "80%" },
  { name: "PSDtoHTML", progress: "100%" },
];

const Skill = ({ name, progress }) => {
  return (
    <div>
      <p className={styles.titleSkill}>{name}</p>{" "}
      {/* Use 'name' instead of 'skill.name' */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: progress }}>
          <span className={styles.progressText}>{progress}</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const rightSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="section">
      <div>
        <h3 className={styles.headingQuarternary}>Skills</h3>
        <div className={styles.skillContainer}>
          {/* Left side skills */}
          <div className={styles.leftSide}>
            {leftSkills.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                progress={skill.progress}
              />
            ))}
          </div>
          {/* Right side skills */}
          <div className={styles.rightSide}>
            {rightSkills.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                progress={skill.progress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
