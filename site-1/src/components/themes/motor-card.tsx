import { faTrash, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import engine from "../../../assets/engine.json";

function MotorCard({ items }: { items: any }) {
  const [menus, setMenus] = useState<{ [key: number]: boolean }>({});
  const menuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleMenu = (id: number) => {
    setMenus((prevMenus) => ({
      ...prevMenus,
      [id]: !prevMenus[id],
    }));
  };
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    const menuKeys = Object.keys(menuRefs.current);

    for (const key of menuKeys) {
      if (
        menuRefs.current[Number(key)] &&
        !menuRefs.current[Number(key)]?.contains(target)
      ) {
        setMenus((prevMenus) => ({
          ...prevMenus,
          [Number(key)]: false,
        }));
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [activeRows, setActiveRows] = useState(items.map(() => false));

  const handleClick = (index: any) => {
    const newActiveRows = [...activeRows];
    newActiveRows[index] = !newActiveRows[index];
    setActiveRows(newActiveRows);
  };

  return items.map((item: any) => (
    <div className="col-lg-3 col-6" key={item.id}>
      <div className="small-box bg-info">
        <div className="inner">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3 col-12">
              <Lottie
                loop={activeRows[item.id] ? false : true}
                animationData={engine}
              />
            </div>
            <div className="col-lg-9 col-6">
              <p>Burada input range olması gerek</p>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="d-flex flex-column ">
              <h3>150</h3>
              <p>{item.ad}</p>
              <p>{item.aciklama}</p>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <button
                className={`btn ${
                  activeRows[item.id] ? "btn-success" : "btn-danger"
                }`}
                onClick={() => handleClick(item.id)}
                style={{ width: "5em" }}
              >
                {activeRows[item.id] ? "Çalıştır" : "Durdur"}
              </button>
            </div>
          </div>
        </div>
        <div
          className="text-center nav-item dropdown"
          onClick={() => toggleMenu(item.id)}
          ref={(el) => (menuRefs.current[item.id] = el)}
        >
          <div
            className="pe-auto nav-link dropdown-toggle user-action text-center"
            style={{
              cursor: "pointer",
            }}
          >
            Düzenle
            <div
              className={`text-center dropdown-menu ${
                menus[item.id] ? "show" : ""
              }`}
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-40%)",
              }}
            >
              <button type="button" className="dropdown-item">
                <FontAwesomeIcon
                  style={{ marginRight: "0.5em", color: "red" }}
                  icon={faTrash}
                />
                Sil
              </button>
              <button type="button" className="dropdown-item">
                <FontAwesomeIcon
                  style={{ marginRight: "0.5em" }}
                  icon={faWrench}
                />
                Düzenle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}
export default MotorCard;
