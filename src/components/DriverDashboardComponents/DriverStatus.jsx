import { React, useContext } from "react";
import "../../styles/Dashboard/notification.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStateContext } from "../../Context/Global_Context";

const DriverStatus = () => {
  const { user, setUserStatus } = useContext(GlobalStateContext);
  const handleClick = async (param) => {
    console.log(JSON.stringify(param));
    const obj = {
      isDriverOk: param,
    };
    try {
      const result = await fetch(
        `http://localhost:8000/api/v1/users/driver/${user._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result?.status === 200) {
        setUserStatus(true);
        toast.success("Status has been updated!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Failed to update status!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("An error occurred while updating status!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="notify">
      <button onClick={() => handleClick(true)} className="in">
        ACTIVE
      </button>
      <button onClick={() => handleClick(false)} className="out">
        ABSENCE
      </button>
      <ToastContainer />
    </div>
  );
};

export default DriverStatus;
