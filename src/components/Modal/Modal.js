import { Component } from "react";
import { createPortal } from "react-dom";
import css from "components/Modal/Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.hendleKeyDown);
    }

    componentWillUnmount() {
        console.log('Nodal componentWillUnmount');
        window.removeEventListener('keydown', this.hendleKeyDown);
    }

    hendleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className={css.backdrop}>
                <div className={css.content}>{this.props.children}</div>
            </div>,
            modalRoot,
        );  
    }
}