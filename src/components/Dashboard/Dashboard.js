import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [showFile, setShowFile] = useState(null);
    const [responseData, setResponseData] = useState(null);

    const handleFileChange = (event) => {
        const reader = new FileReader()
        const file = event.target.files[0];
        reader.readAsDataURL(file)
        setSelectedFile(file);
        setShowFile(URL.createObjectURL(event.target.files[0]));
        setResponseData(null); // Reset responseData when a new file is selected
    };

    const validateForm = () => {
        // Add your form validation logic here
        return true; // For example, always return true for now
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);
            const response = await axios.post('http://192.168.10.96:8870/upload', formData, {});
            setSubmitted(true);
            setError(false);
            setResponseData(response.data.result); // Store response data
        } catch (error) {
            console.error('Error:', error);
            setSubmitted(false);
            setError(true);
        }
    };

    return (
        <div className="dashboard-container">
            <h1>Gemini Health App</h1>
            <div>
                <input type="file" accept='.png,.jpg,.jpeg,.gif' id="fileInput" onChange={handleFileChange} />
            </div>
            {selectedFile && (
                <div>
                    <img src={showFile} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                </div>
            )}
            {error && <div className="error-message">Error occurred while submitting the image.</div>}
            {submitted && <div className="success-message">Image submitted successfully!</div>}
            {responseData && <div className="response-data">{responseData}</div>}
            {showFile && (
                <button onClick={handleSubmit} className="btn-send" type="submit">
                    Send
                </button>
            )}
        </div>
    );
};

export default Dashboard;
