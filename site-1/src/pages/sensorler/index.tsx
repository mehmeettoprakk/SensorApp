import { Card, PanelContent } from "@/components";
import SensorCard from "@/components/themes/sensor-card";
import React, { useState, useEffect, useRef } from "react";
import { sensor_veri } from "@/components/themes/sensor-veri";
import SensorAddPopup from "@/components/themes/sensonr-add-popup";

const Sensorler = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [sensors, setSensor] = useState(sensor_veri);

  const handleAddSensor = (newSensor: {
    id: number;
    ad: string;
    tip: string;
    aciklama: string;
    acik_kapali: boolean;
    tarih: string;
  }) => {
    setSensor((prev) => [...prev, newSensor]);
  };

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <PanelContent title="Sensör">
      <Card title="Sensörler">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title">Sensör Ekle/Sil</h5>
          <button className="btn btn-success" onClick={handleOpenPopup}>
            Sensor Ekle
          </button>
        </div>
        <div className="row">
          <SensorCard items={sensors} />
        </div>
        <div>
          <SensorAddPopup
            isVisible={isPopupVisible}
            onClose={handleClosePopup}
            onAdd={handleAddSensor}
          />
        </div>
      </Card>
    </PanelContent>
  );
};

export default Sensorler;
