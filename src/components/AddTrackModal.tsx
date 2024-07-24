import { Modal } from './shared/modal';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AddTrackModal = ({ open, onClose }: Props) => {
  return (
    <Modal isOpen={open} onClose={onClose} title='Add Track'>
      <div>Form will go here</div>
    </Modal>
  );
};
