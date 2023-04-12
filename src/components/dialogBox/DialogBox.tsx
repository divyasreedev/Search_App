import React from 'react';
import Dialog from '@mui/material/Dialog';
import {height} from  '@mui/system';

interface props_type{
    isOpen:boolean;
    toClose:(val:boolean) => void;
}

const DialogBox = (props: props_type) => {

  const handleCloseDialog = ():void => {
    props.toClose(false);
  };

  return(
    <div>
        <Dialog onClose = {handleCloseDialog} open = {props.isOpen} >
        <h3>Latest Trends</h3>
        <section>
            
        </section>
        </Dialog>
    </div>
  )
}

export default DialogBox