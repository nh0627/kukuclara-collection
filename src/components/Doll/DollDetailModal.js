import React from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import DefaultModal from "../UI/DefaultModal";

const DollDetailModal = ({ doll, ...rest }) => {

  const { specialYn, img, name, type, series, date } = doll;

  return (
    <DefaultModal header="Detail" {...rest}>
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
    </DefaultModal>

  )
}

export default DollDetailModal;