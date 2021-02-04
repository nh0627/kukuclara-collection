import React from "react";
import PropTypes from 'prop-types';
import DefaultModal from "./DefaultModal";
import { Modal, Header } from "semantic-ui-react";
import { notes } from "../../data/notes";

const DevNote = ({ trigger }) => {

    const [open, setOpen] = React.useState(false);
    const note = notes[0];

    return (
        <DefaultModal
            header={{ content: "Dev Note", icon: "heart" }}
            trigger={trigger}
            open={open}
            setOpen={setOpen}>
            <Modal.Content>
                <Header as='h3'>{note.header}</Header>
                <p>{note.content}</p>
            </Modal.Content>
        </DefaultModal>
    );
};

DevNote.propTypes = {
    trigger: PropTypes.object
};

export default DevNote;