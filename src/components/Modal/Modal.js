import { Component } from "react";
import { createPortal } from "react-dom";
import css from "components/Modal/Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        console.log('Modal componentDidMount');
    }

    componentWillUnmount() {
        console.log('Nodal componentWillUnmount');
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