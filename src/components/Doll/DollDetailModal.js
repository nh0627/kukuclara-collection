import React from "react";
import { Header, Image, Modal, List, Divider, Label } from "semantic-ui-react";
import DefaultModal from "../UI/DefaultModal";

const DollDetailModal = ({ doll, trigger }) => {

  const [open, setOpen] = React.useState(false);
  const { releaseCode, img, name, type, series, date, eyeColor, eyeColorHexCode, hairColor, hairColorHexCode, skinType, link, remarks } = doll;

  const colorLabel = (color) => <Label circular empty style={{ "backgroundColor": `#${color}`, "marginRight": "0.3rem" }} />;

  return (
    <DefaultModal header={{ content: "Details", icon: "paperclip" }} trigger={trigger} open={open} setOpen={setOpen}>
      <Modal.Content image>
        <Image size="medium" src={img} wrapped />
        <Modal.Description>
          <Header>{name} {series} {type}</Header>
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
              <List.Header>Skin Type</List.Header>{skinType}
            </List.Item>
            <List.Item>
              <List.Header>Outfit</List.Header>{remarks}
            </List.Item>
          </List>
        </Modal.Description>
      </Modal.Content>
    </DefaultModal>

  )
}

export default DollDetailModal;