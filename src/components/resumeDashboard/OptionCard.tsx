import React from 'react';
import { Card } from '@nextui-org/react';

interface OptionCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({ title, description, icon, onClick }) => {
    return (
        <div onClick={onClick} className="cursor-pointer">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-500 h-[270px]">
                <div className="flex justify-center mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </Card>
        </div>
    );
};

export default OptionCard;

