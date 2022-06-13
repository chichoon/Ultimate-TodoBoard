import { ReactNode, ReactPortal } from 'react';
import ReactDom from 'react-dom';

interface IPortalType {
  children: ReactNode;
}

const ModalPortal = ({ children }: IPortalType): ReactPortal => {
  const element = document.getElementById('modal') as Element;
  return ReactDom.createPortal(children, element);
};

export default ModalPortal;
