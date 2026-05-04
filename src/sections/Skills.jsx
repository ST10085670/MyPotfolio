export const Skills = () => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Docker", level: "Beginner" },
  ];

  const levelMap = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
  };

  const totalCells = 3;

  return (
    <div className="container py-5">
      {skills.map((skill, idx) => (
        
        <div
          key={idx}
          className="d-flex align-items-center mb-3 gap-3"
        >
          
          {/* Skill name */}
          <span style={{ minWidth: "120px" }}>
            {skill.name} :
          </span>

          {/* Cells */}
          <div className="d-flex gap-2">
            {Array.from({ length: totalCells }).map((_, i) => (
              <div
                key={i}
                className={
                  i < levelMap[skill.level]
                    ? "bg-primary"
                    : "bg-secondary opacity-25"
                }
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "4px",
                }}
              />
            ))}
          </div>

        </div>
      ))}
    </div>
  );
};