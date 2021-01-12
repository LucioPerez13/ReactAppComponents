import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Input } from "reactstrap";

function ModalLucio(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="btn btn-success" onClick={handleShow}>
                Actualizar
            </Button>

            <Modal isOpen={show} onClosed={handleClose}>
                <ModalHeader>
                    Modal en react
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            {
                                props.listaForms.map((x, i) =>
                                    <div key={i}>
                                        <Label for="exampleEmail">{x.description}</Label>
                                        <Input type={x.type} name={x.name} placeholder={x.description} />
                                                                  
                                    </div>
                                )
                            }
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
export default ModalLucio