import React, {Component} from "react";
import Barcode from 'react-barcode';
import './ReaderCardToPrint.css';
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class CardToPrint extends Component {
  render() {
    const reader = this.props.newReader;
    return (
      <div className="container">
        <div className="cardToPrint">
          <div className="cardToPrint__barcode">
            <Barcode value={reader && reader.inventoryCode} width={2} height={40} />
          </div>
          <div className="cardToPrint__user">
            <div className="cardToPrint__item">Фамилия: {reader && reader.lastName}</div>
            <div className="cardToPrint__item">Имя: {reader && reader.firstName}</div>
            <div className="cardToPrint__item">Группа: {reader && reader.groupId.name}</div>
            <div className="cardToPrint__item">Документ: {reader && reader.documentNumber}</div>
          </div>
        </div>
        <div>
        <Button onClick={() => window.print()} bsStyle="primary" style={{marginRight: '20px'}}>Распечатать</Button>
        <Button onClick={() => this.props.history.push('/librarian')} bsStyle="success">Закрыть</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newReader: state.readers.newReader
  }
};

export default connect(mapStateToProps)(CardToPrint);
