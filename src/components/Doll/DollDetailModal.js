import React from "react";
import PropTypes from 'prop-types';
import { Header, Image, Modal, List, Label } from "semantic-ui-react";
import DefaultModal from "../Default/DefaultModal";

const DollDetailModal = ({ doll, trigger }) => {

  const [open, setOpen] = React.useState(false);
  const { releaseCode, img, name, type, series, date, eyeColor, eyeColorHexCode, hairColor, hairColorHexCode, skinTypeHexCode, skinType } = doll;
  debugger;
  const colorLabel = (color) => <Label circular empty style={{ "backgroundColor": `#${color}`, "marginRight": "0.3rem" }} />;

  const header = (name === series) ? series : `${name} ${series}`;

  return (
    <DefaultModal header={{ content: "Details", icon: "paperclip" }} trigger={trigger} open={open} setOpen={setOpen}>
      <Modal.Content image>
        <Image size="medium" src={img} wrapped />
        <Modal.Description>
          <Header>{header} {type}</Header>
          <List>
            <List.Item>
              <List.Header>Release</List.Header>{(releaseCode === "S") ? "Special" : "Normal"}
            </List.Item>
            <List.Item>
              <List.Header>Date</List.Header>{date}
            </List.Item>
            <List.Item>
              <List.Header>Hair color</List.Header>{colorLabel(hairColorHexCode)}{hairColor}
            </List.Item>
            <List.Item>
              <List.Header>Eye color</List.Header>{colorLabel(eyeColorHexCode)}{eyeColor}
            </List.Item>
            <List.Item>
              <List.Header>Skin Type</List.Header>{colorLabel(skinTypeHexCode)}{skinType}
            </List.Item>
          </List>
        </Modal.Description>
      </Modal.Content>
    </DefaultModal>

  )
}

DollDetailModal.propTypes = {
  doll: PropTypes.object,
  trigger: PropTypes.object
};

export default DollDetailModal;