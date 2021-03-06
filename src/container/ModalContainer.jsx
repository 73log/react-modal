import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { actionChangeModal, actionCloseModal } from '../actions';


class ModalContainer extends Component {
 constructor() {
    super();
  }

  handleOpenModal(e) {
    this.props.handlerChangeModal(e);
  }

  handleCloseModal() {
    this.props.handlerCloseModal();
  }

  render() {
    const modalProps = {
      activeModalName: this.props.activeModalName,
      handler: this.handleCloseModal.bind(this)
    };

    const thumbProps = {
      onClick: (e) => this.handleOpenModal.bind(this)(e)
    }

    return (
      <div className="ModalContainer">
        <button data-ref-modal="modal1" {...thumbProps}>
          open modal1
        </button>

        <button data-ref-modal="modal3" {...thumbProps}>
          open modal3
        </button>

        <button data-ref-modal="modal2" {...thumbProps}>
          open modal2
        </button>

        <Modal name={'modal1'} {...modalProps}>
          <p>modal1</p>
          <img src="https://placehold.jp/640x480.png" alt="dummy image" />
        </Modal>

        <Modal name={'modal3'} {...modalProps}>
          <p>modal3</p>
          <img src="https://placehold.jp/640x480.png" alt="dummy image" />
        </Modal>

        <Modal name={'modal2'} {...modalProps}>
          <p>modal2</p>
          <img src="https://placehold.jp/640x480.png" alt="dummy image" />
        </Modal>
      </div>
    );
  }
}

ModalContainer.propTypes = {
  handlerChangeModal: PropTypes.func.isRequired,
  handlerCloseModal: PropTypes.func.isRequired,
  activeModalName: PropTypes.string.isRequired
};


function mapStateToProps(state) {
  return {
    activeModalName: state.reducerChangeModal.activeModalName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handlerChangeModal(e) {
      let modalName = e.target.getAttribute('data-ref-modal');

      dispatch(actionChangeModal(modalName));
    },

    handlerCloseModal() {
      dispatch(actionCloseModal());
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
