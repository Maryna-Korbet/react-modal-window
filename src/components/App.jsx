import { Component } from "react";
import Modal from "components/Modal/Modal";

export class App extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <button type="button" onClick={this.toggleModal}>Open Modal</button>
        {showModal && (
          <Modal>
            <h1>Hello World</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis placeat iusto debitis facere porro in dolores, quasi quibusdam nemo at iure. Explicabo quo itaque non quaerat magni accusantium nulla deleniti?
            </p>
            <button type="button" onClick={this.toggleModal}>Close</button>
          </Modal>
        )}
      </div>
    );
  };
};


