import React from "react";

// TaskCard component
const TaskCard = ({ title, description, priority, completed, onStatusToggle }) => {
  const priorityColors = {
    High: "#e74c3c",    
    Medium: "#f1c40f",  
    Low: "#2ecc71",    
  };

  const statusColors = {
    true: "#2ecc71",  
    false: "#e74c3c",  
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>{title}</h3>
        <span
          style={{
            ...styles.status,
            backgroundColor: statusColors[completed],
            cursor: "pointer",
          }}
          onClick={onStatusToggle}
        >
          {completed ? "Completed" : "Pending"}
        </span>
      </div>

      <p style={styles.description}>{description}</p>

      <div style={styles.footer}>
        <span style={{ ...styles.priority, backgroundColor: priorityColors[priority] || "#333" }}>
          {priority}
        </span>
        <p
          style={styles.toggleText}
          onClick={onStatusToggle}
        >
          {completed ? "Mark as Undone" : "Mark as Done"}
        </p>
      </div>
    </div>
  );
};

// Card styling
const styles = {
  card: {
    backgroundColor: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    transition: "transform 0.2s",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontSize: "1.4rem",
    fontWeight: "700",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    color: "#555",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priority: {
    padding: "4px 10px",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "0.85rem",
    fontWeight: "600",
  },
  status: {
    padding: "4px 12px",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: "600",
    fontSize: "0.9rem",
    userSelect: "none",
  },
  toggleText: {
    cursor: "pointer",
    color: "#007bff",
    textDecoration: "underline",
    fontWeight: "600",
    fontSize: "0.9rem",
    margin: 0,
  },
};

export default TaskCard;
