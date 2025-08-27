const ChangeButton = ({ textButton, setButtonText }: any) => {
  return (
    <button className="change-button" onClick={setButtonText}>
      {textButton}
    </button>
  );
};
export default ChangeButton;
