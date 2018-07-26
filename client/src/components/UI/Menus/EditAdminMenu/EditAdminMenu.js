import React, {Component, Fragment} from 'react';
import { Col, Row, Thumbnail } from "react-bootstrap";

import editUser from "../../../../assets/images/edit-user.png"
import edit from "../../../../assets/images/edit.png"


class EditAdminMenu extends Component {

  render() {
    return (
      <Fragment>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={edit} alt="Редактировать книгу" href="/edit-book">
              <p>Редактировать книгу</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Thumbnail src={editUser} alt="Редактировать читателя" href="/edit-reader" >
              <p>Редактировать читателя</p>
            </Thumbnail>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default EditAdminMenu;