import { MdDelete, MdModeEditOutline } from 'react-icons/md';

const Icons = () => {
  return (
    <div>
      <MdModeEditOutline
        style={{
          marginRight: '10px',
          background: 'white',
          width: '18px',
          height: '18px',
        }}
      />
      <MdDelete
        style={{
          background: 'red',
          color: 'white',
          width: '18px',
          height: '18px',
        }}
      />
    </div>
  );
};

export default Icons;
