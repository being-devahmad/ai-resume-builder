import { Card, CardBody, CardFooter, Image, Button } from '@nextui-org/react'
import { Template } from '@/types'

interface TemplateCardProps {
    template: Template
    isActive: boolean
    isSelected: boolean
    onCardSelect: (template: Template) => void
}

export function TemplateCard({
    template,
    isActive,
    isSelected,
    onCardSelect,
}: TemplateCardProps) {
    return (
        <Card
            isPressable
            isHoverable
            className={`w-[300px] ${isActive ? 'scale-100' : 'scale-90'} transition-transform duration-300`}
            onPress={() => onCardSelect(template)}
        >
            <CardBody className="p-0">
                <Image
                    src={template.image}
                    alt={template.name}
                    className="w-full h-[200px] object-cover"
                />
            </CardBody>
            <CardFooter className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">{template.name}</h3>
                <Button
                    color={isSelected ? "primary" : "default"}
                    variant={isSelected ? "solid" : "bordered"}
                    className="mt-2"
                    onPress={() => onCardSelect(template)}
                >
                    {isSelected ? 'Selected' : 'Select Template'}
                </Button>
            </CardFooter>
        </Card>
    )
}

