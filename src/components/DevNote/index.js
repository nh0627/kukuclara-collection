import React, { useState, useCallback, useEffect } from "react";
import PropTypes from 'prop-types';
import DefaultModal from "../Default/DefaultModal";
import { Modal, Header } from "semantic-ui-react";
import { getNotes } from "../../apis/axios/spreadsheets";

const DevNote = ({ trigger }) => {
    const [open, setOpen] = useState(false);
    const [notes, setNotes] = useState([]);

    const getLoadedNotes = useCallback(async () => {
        let response = await getNotes();
        setNotes(response)
    }, []);

    useEffect(() => {
        getLoadedNotes()
    }, [getLoadedNotes]);

    const renderContent = (note, i) => {
        return (
            <article key={i}>
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
                {notes.map((note, i) => renderContent(note, i))}
            </Modal.Content>
        </DefaultModal>
    );
};

DevNote.propTypes = {
    trigger: PropTypes.object
};

export default DevNote;