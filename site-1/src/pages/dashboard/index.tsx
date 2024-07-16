// import { Card, PanelContent } from "@/components";
// import Link from "next/link";

// export default function Dashboard() {
//   return (
//     <PanelContent headerContent title="Dashboard">
//       <div className="row">
//         <div className="col-lg-3 col-6">
//           <div className="small-box bg-info">
//             <div className="inner">
//               <h3>150</h3>
//               <p>New Orders</p>
//             </div>
//             <div className="icon">
//               <i className="ion ion-bag" />
//             </div>
//             <Link href="/" className="small-box-footer">
//               More info <i className="fas fa-arrow-circle-right" />
//             </Link>
//           </div>
//         </div>
//         <div className="col-lg-3 col-6">
//           <div className="small-box bg-success">
//             <div className="inner">
//               <h3>
//                 53<sup style={{ fontSize: "20px" }}>%</sup>
//               </h3>
//               <p>Bounce Rate</p>
//             </div>
//             <div className="icon">
//               <i className="ion ion-stats-bars" />
//             </div>
//             <Link href="/" className="small-box-footer">
//               More info <i className="fas fa-arrow-circle-right" />
//             </Link>
//           </div>
//         </div>

//         <div className="col-lg-3 col-6">
//           <div className="small-box bg-warning">
//             <div className="inner">
//               <h3>44</h3>
//               <p>User Registrations</p>
//             </div>
//             <div className="icon">
//               <i className="ion ion-person-add" />
//             </div>
//             <Link href="/" className="small-box-footer">
//               More info <i className="fas fa-arrow-circle-right" />
//             </Link>
//           </div>
//         </div>

//         <div className="col-lg-3 col-6">
//           <div className="small-box bg-danger">
//             <div className="inner">
//               <h3>65</h3>
//               <p>Unique Visitors</p>
//             </div>
//             <div className="icon">
//               <i className="ion ion-pie-graph" />
//             </div>
//             <Link href="/" className="small-box-footer">
//               More info <i className="fas fa-arrow-circle-right" />
//             </Link>
//           </div>
//         </div>
//         <div className="col-lg-6 col-lg-6">
//           <Card title="Card 1"></Card>
//         </div>
//         <div className="col-lg-6 col-lg-6">
//           <Card title="Card 2" />
//         </div>
//       </div>
//     </PanelContent>
//   );
// }
import { Card, PanelContent } from "@/components";
import Link from "next/link";
import { useTable } from "react-table";
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import MotorTable from "@/components/themes/motor-table";
import { motor_veri } from "@/components/themes/motor-veri";
import { sensor_veri } from "@/components/themes/sensor-veri";
import SensorTable from "@/components/themes/sensor-table";

export default function Dashboard() {
  return (
    <PanelContent headerContent title="Dashboard">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{motor_veri.length}</h3>
              <p>Çalışan Motorlar</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link href="/motorlar" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>{sensor_veri.length}</h3>
              <p>Sensörler</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <Link href="/sensorler" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Çalışan Fan sayısı</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <Link href="/motorlar" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-12">
          <Card title="Motorlar">
            <div>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>id</TableCell>
                      <TableCell>Ad</TableCell>
                      <TableCell>Tip</TableCell>
                      <TableCell>Aciklama</TableCell>
                      <TableCell>Acik_kapali</TableCell>
                      <TableCell>Ayar_degeri</TableCell>
                      <TableCell>Tarih</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <MotorTable items={motor_veri} />
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Card>
        </div>
        <div className="col-12">
          <Card title="Sensörler">
            <div>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>id</TableCell>
                      <TableCell>Ad</TableCell>
                      <TableCell>Tip</TableCell>
                      <TableCell>Aciklama</TableCell>
                      <TableCell>Acik_kapali</TableCell>
                      <TableCell>Ayar_degeri</TableCell>
                      <TableCell>Tarih</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <SensorTable items={sensor_veri} />
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Card>
        </div>
      </div>
    </PanelContent>
  );
}
