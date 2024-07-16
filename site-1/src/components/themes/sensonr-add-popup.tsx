import engine from "../../../assets/engine.json";
import React, { useState, useEffect, useRef } from "react";
import styles from "./motorPop.module.css";
import Lottie from "lottie-react";
import { sensor_veri } from "./sensor-veri";

interface SensorAddPopupProps {
  isVisible: boolean;
  onClose: () => void;
  onAdd: (newSensor: {
    id: number;
    ad: string;
    tip: string;
    aciklama: string;
    acik_kapali: boolean;
    tarih: string;
  }) => void;
}

const SensorAddPopup: React.FC<SensorAddPopupProps> = ({
  isVisible,
  onClose,
  onAdd,
}) => {
  const [formData, setFormData] = useState({
    id: sensor_veri.length + 1, // Assign the next available ID
    ad: "",
    tip: "",
    aciklama: "",
    acik_kapali: false,
    tarih: new Date().toISOString(),
  });

  const popupRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "ayar_degeri" ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.popup_overlay}>
      <div className={styles.popup_content} ref={popupRef}>
        <div className="small-box bg-info">
          <div className="inner">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-lg-3 col-12">
                <Lottie loop={true} animationData={engine} />
              </div>
              <div className="col-lg-9 col-12">
                <h4 className="text-center">Sensör Ekle</h4>
              </div>
            </div>
            <div className="row d-flex justify-content-around">
              <div className="d-flex flex-column">
                <input
                  type="text"
                  name="ad"
                  placeholder="Adını Giriniz"
                  value={formData.ad}
                  onChange={handleChange}
                  className="mb-2"
                />
                <input
                  type="text"
                  name="tip"
                  placeholder="Tipini Giriniz"
                  value={formData.tip}
                  onChange={handleChange}
                  className="mb-2"
                />
                <textarea
                  name="aciklama"
                  placeholder="Açıklama"
                  value={formData.aciklama}
                  onChange={handleChange}
                  className="mb-2"
                />

                <button className="mb-2 btn btn-success" onClick={handleSubmit}>
                  Ekle
                </button>
                <button className="btn btn-danger" onClick={onClose}>
                  İptal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorAddPopup;
