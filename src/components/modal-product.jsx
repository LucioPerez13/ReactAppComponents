import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input } from 'reactstrap'

const ModalProduct = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props.forms)
    return (
        <>
            <Modal isOpen={show} onClosed={handleClose}>
                <ModalHeader>
                    Actualizar producto
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <>
                                <Label for="descripcion">Descripción</Label>
                                <Input type="text" name="descripcion" placeholder="Ingrese la descripción" />
                                <br></br>

                            </>
                        </FormGroup>
                        <FormGroup>
                            <>
                                <Label for="precio">Precio</Label>
                                <Input type="text" name="precio" placeholder="Ingrese el precio" />
                                <br></br>

                            </>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={handleClose}>
                        Cerrar
                        </Button>
                    <Button color="primary" onClick={handleClose}>
                        Guardar
                        </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default ModalProduct