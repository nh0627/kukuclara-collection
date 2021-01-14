import React from "react";
import { Header, Image, Modal } from "semantic-ui-react";
import SemanticModal from "../UI/SemanticModal";

const DollDetailModal = ({doll, trigger}) => {

  const { isSpecialCode, img, name, type, series, date } = doll;

  return (
    <SemanticModal header={{content: "Details", icon: null }} trigger={trigger}>
      <Modal.Content image>
        <Image size="medium" src={img} wrapped />
        <Modal.Description>
          <Header>{name} {type}</Header>
          <p>
            {series}
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </SemanticModal>

  )
}

export default DollDetailModal;