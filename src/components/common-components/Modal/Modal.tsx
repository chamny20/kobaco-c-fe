import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ModalProvider } from './ModalContext';
import './Transition.css';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
  disableKeyboardEvent?: boolean;
  children: React.ReactNode;
};

function ModalContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: '50px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        backgroundColor: 'white',
        minWidth: '400px',
        maxWidth: '1300px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        // position: 'relative',
      }}
    >
      {children}
    </div>
  );
}
function BackDrop() {
  return (
    <Transition.Child
      as={Fragment}
      enter="enter"
      enterFrom="enterFrom"
      enterTo="enterTo"
      leave="leave"
      leaveFrom="leaveFrom"
      leaveTo="leaveTo"
    >
      <div
        style={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
        aria-hidden="true"
      />
    </Transition.Child>
  );
}

function ModalMain({
  open,
  onClose,
  disableKeyboardEvent,
  children,
}: ModalProps) {
  return (
    <ModalProvider>
      <Transition show={open} as={Fragment}>
        <Dialog
          style={{ position: 'relative', zIndex: 50 }}
          onClose={() => (disableKeyboardEvent ? {} : onClose())}
          id="modal"
        >
          <BackDrop />

          <Transition.Child
            as={Fragment}
            enter="enter"
            enterFrom="enterFromModal"
            enterTo="enterToModal"
            leave="leave"
            leaveFrom="leaveFromModal"
            leaveTo="leaveToModal"
          >
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ModalContainer>{children}</ModalContainer>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </ModalProvider>
  );
}

export default ModalMain;
