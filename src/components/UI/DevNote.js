import React from "react";
import DefaultModal from "./DefaultModal";
import { Modal, Header } from "semantic-ui-react";

const DevNote = ({ trigger }) => {

    const [open, setOpen] = React.useState(false);

    const notes = [{ header: "App Released🙇‍♀️", content: "" }]

    const renderNotes = ({ header, content }, i) =>
        <Modal.Content key={i}>
            <Header as='h3'>{header}</Header>
            <p>{content}</p>
        </Modal.Content>;

    return (
        <DefaultModal
            header={{ content: "Dev Note", icon: "heart" }}
            trigger={trigger}
            open={open}
            setOpen={setOpen}>
            {notes.map((n, i) => renderNotes(n, i))}
        </DefaultModal>
    );
};

export default DevNote;