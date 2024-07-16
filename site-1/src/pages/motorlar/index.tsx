import { Card, PanelContent } from "@/components";
import React, { useState } from "react";
import MotorCard from "@/components/themes/motor-card";
import { motor_veri } from "@/components/themes/motor-veri";
import MotorAddPopup from "@/components/themes/motor-add-popup";

const Motorlar = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [motors, setMotors] = useState(motor_veri);

  const handleAddMotor = (newMotor: {
    id: number;
    ad: string;
    tip: string;
    aciklama: string;
    acik_kapali: boolean;
    ayar_degeri: number;
    tarih: string;
  }) => {
    setMotors((prev) => [...prev, newMotor]);
  };

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <PanelContent title="Motor">
      <Card title="Motorlar">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title">Motor Ekle/Sil</h5>
          <button className="btn btn-success" onClick={handleOpenPopup}>
            Motor Ekle
          </button>
        </div>
        <div className="row">
          <MotorCard items={motors} />
        </div>
        <div>
          <MotorAddPopup
            isVisible={isPopupVisible}
            onClose={handleClosePopup}
            onAdd={handleAddMotor}
          />
        </div>
      </Card>
    </PanelContent>
  );
};

export default Motorlar;
