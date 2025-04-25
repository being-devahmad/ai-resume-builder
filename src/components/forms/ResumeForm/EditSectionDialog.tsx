import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from "@nextui-org/react";

interface EditSectionDialogProps {
    isOpen: boolean;
    onClose: () => void;
    sectionTitle: string;
    sectionData: any;
    onSave: (updatedData: any) => void;
}

export const EditSectionDialog: React.FC<EditSectionDialogProps> = ({
    isOpen,
    onClose,
    sectionTitle,
    sectionData,
    onSave,
}) => {
    const [editedData, setEditedData] = React.useState(sectionData);

    const handleInputChange = (key: string, value: string) => {
        setEditedData((prev: any) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        onSave(editedData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">{`Edit ${sectionTitle}`}</ModalHeader>
                <ModalBody>
                    {Object.entries(editedData).map(([key, value]) => (
                        <div key={key} className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                            {typeof value === 'string' && value.length > 100 ? (
                                <Textarea
                                    value={value as string}
                                    onChange={(e) => handleInputChange(key, e.target.value)}
                                    className="w-full"
                                />
                            ) : (
                                <Input
                                    value={value as string}
                                    onChange={(e) => handleInputChange(key, e.target.value)}
                                    className="w-full"
                                />
                            )}
                        </div>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Cancel
                    </Button>
                    <Button color="primary" onPress={handleSave}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

