import React from 'react';

interface ResumePreviewProps {
    renderTemplate: () => JSX.Element;
    resumeRef: React.RefObject<HTMLDivElement>;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ renderTemplate, resumeRef }) => {
    return (
        <div
            ref={resumeRef}
            className="flex-grow p-4 rounded-lg shadow-lg border border-gray-200 overflow-hidden"
        >
            {renderTemplate()}
        </div>
    );
};

export default ResumePreview;