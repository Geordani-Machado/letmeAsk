import React from 'react';
import "./Modal.css";

function Modal( { setOpenModal }) {
    return (
      <div 
      className=" d-flex justify-content-center modalBackground">
        <div className="modalContainer">
          <div>
            
          </div>
          <div className="title">
            <h1>Encerrar Sala</h1>
            
          </div>
          
          <div className="body">
            <h3>Tem certeza que você deseja encerrar a sala?</h3>
            
          </div>
            <div className="cont">
            <button 
            onClick={() =>{
              setOpenModal(false);}}>
              <h2 id="cancel-text"> Cancelar </h2>
            </button>

            <button id="cancel"
            onClick={() =>{
              setOpenModal(false);}}>
               <h2 id="cancel-text"> Sim, encerrar </h2>
            </button>
            </div>
        </div>
      </div>
    );
  }


export default Modal;