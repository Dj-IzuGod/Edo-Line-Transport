import React, { useState, useEffect } from "react";
import axios from "axios";

const TestConnection = () => {
  const [backendStatus, setBackendStatus] = useState<string>("Checking...");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const testBackendConnection = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/health");
      setBackendStatus("✅ Connected Successfully!");
      setResponseData(response.data);
    } catch (error: any) {
      setBackendStatus("❌ Connection Failed");
      setResponseData({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testBackendConnection();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Frontend-Backend Connection Test</h2>

      <div style={{ marginBottom: "15px" }}>
        <strong>Backend Status:</strong>
        <span
          style={{
            color: backendStatus.includes("✅") ? "green" : "red",
            marginLeft: "10px",
            fontWeight: "bold",
          }}
        >
          {backendStatus}
        </span>
      </div>

      <button
        onClick={testBackendConnection}
        disabled={loading}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Testing..." : "Test Again"}
      </button>

      {responseData && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <strong>Response Data:</strong>
          <pre style={{ fontSize: "12px", overflow: "auto" }}>
            {JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TestConnection;
