import React from 'react'
import { useReactToPrint } from 'react-to-print';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IconsRecipe = ({ dataMeal, componentRef, isSaved, setIsSaved ,savedFunction , existingSaved}) => {
  let isItemSaved = existingSaved.some(item => item.data.id === dataMeal.id && item.isSaved);
  
  const handleSaved = () =>{
    isItemSaved=!isItemSaved;
    setIsSaved(!isSaved);
    savedFunction(!isSaved, dataMeal)

    if (!isItemSaved) {
        toast.info("The meal has been removed from archives", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.success("The meal has been saved successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  console.log(isItemSaved)

  return (
    <>
      <div>
        <AddCircleOutlineIcon
          onClick={handleSaved}
          sx={{
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": { color: "#eb4a36" },
            color: isItemSaved ? '#eb4a36':''
          }}
        />
        <ToastContainer />

      </div>
      <ShoppingCartOutlinedIcon />
      <LocalPrintshopOutlinedIcon
        onClick={handlePrint}
        sx={{
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": { color: "#eb4a36" },
        }}
      />
    </>
  );
};

export default IconsRecipe
