import React from 'react';
import { Button } from '@mui/material';
import { postToServer } from '../../../features/genericRequest';

/**
 * Button component that downloads a PDF report for a specific project
 * @param {string} projectName - Name of the project to generate report for
 */
const DownloadReportButton = ({ projectName }) => {
    // Helper function to create and trigger PDF download
    const initiateFileDownload = (pdfData, fileName) => {
        // Create PDF file from binary data
        const pdfDocument = new Blob([pdfData], { 
            type: 'application/pdf' 
        });

        // Generate temporary URL for the PDF
        const downloadUrl = window.URL.createObjectURL(pdfDocument);

        // Set up invisible download link
        const downloadElement = document.createElement('a');
        downloadElement.style.display = 'none';
        downloadElement.href = downloadUrl;
        downloadElement.download = fileName;

        // Trigger download
        document.body.appendChild(downloadElement);
        downloadElement.click();

        // Cleanup
        document.body.removeChild(downloadElement);
        window.URL.revokeObjectURL(downloadUrl);
    };

    const handleDownloadClick = async () => {
        try {
            // Get PDF data from server
            const reportData = await postToServer('REPORT_PDF', { data: projectName })
            
            // Generate filename with timestamp
            const timestamp = new Date().toISOString().split('T')[0];
            const fileName = `${projectName}_report_${timestamp}.pdf`;

            // Trigger download
            initiateFileDownload(reportData, fileName);
        } catch (error) {
            console.error('Failed to download report:', error);
        }
    };

    return (
        <Button 
            variant="contained" disableElevation
            onClick={handleDownloadClick}
            color="error"
            title={`Download report for ${projectName}`}
            sx={{ 
                width: 'auto',
                minWidth: '200px',
                maxWidth: '300px'
            }}
        >
            Download
        </Button>
    );
};

export default DownloadReportButton;
