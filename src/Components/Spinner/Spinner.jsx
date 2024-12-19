import spinner from "../../assets/Spinner.gif"

const Spinner = () => {
    return (
        <div className="w-full h-[90vh] flex items-center justify-center">
            <img src={spinner} alt="spinner image" />
        </div>
    );
};

export default Spinner;