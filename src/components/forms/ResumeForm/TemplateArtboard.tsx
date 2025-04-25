import React, { ReactNode } from 'react';

interface TemplateArtboardProps {
    children: ReactNode;
}

const TemplateArtboard: React.FC<TemplateArtboardProps> = ({ children }) => {
    return (
        <div className="w-full overflow-hidden bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-[800px] aspect-[1/1.4142] bg-white shadow-2xl overflow-hidden">
                <div className="w-[142.857%] h-[142.857%] transform scale-[0.7] origin-top-left">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TemplateArtboard;

