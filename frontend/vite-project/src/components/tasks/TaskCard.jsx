import React from "react";

// TaskCard component
const TaskCard = ({ title, description, priority,completed }) => {
  // Determine color based on priority
  const priorityColors = {
    High: "#e74c3c",    // Red
    Medium: "#f1c40f",  // Yellow
    Low: "#2ecc71",     // Green
  };

  return (
    <div style={{ ...styles.card, borderLeft: `5px solid ${priorityColors[priority] || "#333"}` }}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <span style={{ ...styles.priority, backgroundColor: priorityColors[priority] || "#333" }}>
        {priority}
      </span>
      <span style={{ ...styles.priority, backgroundColor: priorityColors[priority] || "#721d1d" }}>
        {completed?"Completed":"Pending"}
      </span>
      
    </div>
  );
};

// Card styling
const styles = {
  card: {
    backgroundColor: "#fff",
    color: "#333",
    padding: "15px 20px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "relative",
  },
  title: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    color: "#666",
  },
  priority: {
    alignSelf: "flex-start",
    padding: "2px 8px",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
};

export default TaskCard;
