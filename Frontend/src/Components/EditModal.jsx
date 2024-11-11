import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from "@chakra-ui/react"


const EditModal = ({ isOpen, onClose, education }) => {

console.log(education)
    return (
        <Modal

            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit details</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>



                    <FormControl mb={4}>
                        <FormLabel>School/College</FormLabel>
                        <Input value={education.college || education.school} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Location</FormLabel>
                        <Input value={education.location} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Degree</FormLabel>
                        <Input value={education.year?.end} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Stream</FormLabel>
                        <Input value={education.stream.toUpperCase()} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Marks</FormLabel>
                        <Input value={education.marks.mark} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel mt={4}>Unit</FormLabel>
                        <Select defaultValue={education.marks.unit}>
                            <option value="cgpa">CGPA</option>
                            <option value="sgpa">SGPA</option>
                            <option value="percentage">Percentage</option>
                        </Select>
                    </FormControl>






                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EditModal
