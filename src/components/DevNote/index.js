import React from "react";
import PropTypes from 'prop-types';
import DefaultModal from "../Default/DefaultModal";
import { Modal, Header } from "semantic-ui-react";
import notes from "../../data/notes.json";

const loadedNotes = JSON.parse(JSON.stringify(notes));

const DevNote = ({ trigger }) => {

    const [open, setOpen] = React.useState(false);

    const renderContent = (note) => {
        return (
            <article>
                <Header as='h3'>{note.header}</Header>
                <p dangerouslySetInnerHTML={{ __html: note.content }}></p>
            </article>
        );
    };

    return (
        <DefaultModal
            header={{ content: "Notice", icon: "heart" }}
            trigger={trigger}
            open={open}
            setOpen={setOpen}>
            <Modal.Content>
                {loadedNotes.map(note => renderContent(note))}
            </Modal.Content>
        </DefaultModal>
    );
};

DevNote.propTypes = {
    trigger: PropTypes.object
};

export default DevNote;