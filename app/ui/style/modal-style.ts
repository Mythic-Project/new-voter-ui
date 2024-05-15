
export const customStyles = (primaryBackground: string) => {
  return {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: primaryBackground,
      border: 0,
      borderRadius: '16px'
    },
    overlay: {
        backgroundColor: 'rgb(0,0,0,60%)'
    }
  }
};
