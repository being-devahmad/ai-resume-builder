import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface TemplateArtboardProps {
    children: ReactNode;
}

const TemplateArtboard: React.FC<TemplateArtboardProps> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    // A4 page height in pixels (297mm at 96 DPI)
    const A4HeightInPixels = 1122;

    useEffect(() => {
        const updateHeight = () => {
            if (contentRef.current) {
                const scaledHeight = contentRef.current.scrollHeight * 0.7;
                setContentHeight(Math.max(scaledHeight, A4HeightInPixels));
            }
        };

        const resizeObserver = new ResizeObserver(updateHeight);
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }

        updateHeight();

        return () => {
            if (contentRef.current) {
                resizeObserver.unobserve(contentRef.current);
            }
        };
    }, [children]);

    return (
        <div className="w-full overflow-hidden bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-8 border border-black">
            <div
                className="w-full max-w-[800px] bg-white shadow-2xl overflow-hidden"
                style={{ height: `${contentHeight}px` }}
            >
                <div
                    ref={contentRef}
                    className="w-[142.857%] h-[142.857%] transform scale-[0.7] origin-top-left"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TemplateArtboard;

