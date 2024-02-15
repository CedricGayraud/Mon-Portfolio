import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = () => {
  toast.success("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: undefined,
  });
};

const notifyError = () => {
  toast.error("🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: undefined,
  });
};

export { notifySuccess, notifyError };
