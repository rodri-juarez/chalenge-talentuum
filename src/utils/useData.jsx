import { useState } from "react";
import { typeResource } from "../app/typeResource.jsx";
import Swal from "sweetalert2";

export const useData = () => {
  const [recurso, setRecurso] = useState("");
  const [recursos, setRecursos] = useState([]);
  const [showDataGrid, setShowDataGrid] = useState();

  const getData = () => {
    if (!recurso.cantidad) {
      return Swal.fire({
        title: "Añada la cantidad del recurso!",
        icon: "error",
        confirmButtonText: "OK",
        background: "#1f1f1f",
        confirmButtonColor: "rgb(158, 158, 158)",
      });
    }
    setRecursos([...recursos, recurso]);
    upgradeAmount();
    setShowDataGrid(true);
  };

  const handleChange = (event) => {
    const resource = typeResource.filter((element) => {
      return element.name === event.target.value;
    });
    setRecurso(resource[0]);
    upgradeAmount()
  };

  const upgradeResource = (event) => {
    const fecha = `${new Date()}`;
    const fechas = fecha.slice(0, 24);
    setRecurso({
      ...recurso,
      cantidad: event.target.value,
      fecha_de_ingreso: fechas,
    });
  };

  const upgradeAmount = () => {
    document.getElementById("input-cantidad").value = "";
    setRecurso({ ...recurso, cantidad: "" });
  };

  const deleteResource = (fecha_de_ingreso) => {
    const newRecursos = recursos.filter((element) => {
      return element.fecha_de_ingreso !== fecha_de_ingreso;
    });
    setRecursos(newRecursos);
  };

  return {
    recurso,
    recursos,
    getData,
    showDataGrid,
    handleChange,
    upgradeResource,
    deleteResource,
  };
};
