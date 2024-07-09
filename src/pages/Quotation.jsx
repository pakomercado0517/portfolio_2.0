import { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Button, TextInput, Label, FileInput } from "flowbite-react";
import useFormatNumber from "../hooks/useFormatNumber";

export default function Quotation() {
  const [datos, setDatos] = useState({
    empresa: "",
    rfc: "",
    telefono: 0,
    email: "",
    fecha: "",
    destinatario: "",
    destinatarioEmpresa: "",
    despedida:
      "Sin más, quedo a sus órdenes ante cualquier duda, situación o comentario de su parte agradeciendo de antemano las atenciones prestadas.",
    productos: [],
    clausulas: [],
    firma: "",
    cargo: "",
  });

  const [firmaImg, setFirmaImg] = useState(null);

  const formatNumber = useFormatNumber();

  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getUTCDate();
    const mes = meses[date.getUTCMonth()];
    const año = date.getUTCFullYear();
    return `Tuxpan de Rodríguez Cano, Veracruz. A ${dia} de ${mes} del ${año}.`;
  };

  const agregarProducto = () => {
    setDatos((prevDatos) => ({
      ...prevDatos,
      productos: [
        ...prevDatos.productos,
        {
          cantidad: "",
          unidad: "",
          descripcion: "",
          precioUnitario: "",
          total: "",
        },
      ],
    }));
  };

  const agregarClausula = () => {
    setDatos((prevDatos) => ({
      ...prevDatos,
      clausulas: [...prevDatos.clausulas, ""],
    }));
  };

  const handleProductoChange = (e, index) => {
    const { name, value } = e.target;
    const nuevosProductos = [...datos.productos];
    nuevosProductos[index][name] = value;
    setDatos({ ...datos, productos: nuevosProductos });
  };

  const handleClausulaChange = (e, index) => {
    const { value } = e.target;
    const nuevasClausulas = [...datos.clausulas];
    nuevasClausulas[index] = value;
    setDatos({ ...datos, clausulas: nuevasClausulas });
  };

  const handleFirmaChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => setFirmaImg(reader.result);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const generarPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    const contacto = `Tel: ${datos.telefono} | Email: ${datos.email}`;

    // Encabezado centrado
    doc.setFontSize(16);
    doc.setTextColor(96, 96, 96); // Gris oscuro
    doc.text(datos.empresa, pageWidth / 2, 10, { align: "center" });
    doc.setFontSize(12);
    doc.text(datos.rfc.toUpperCase(), pageWidth / 2, 18, { align: "center" });
    doc.text(contacto, pageWidth / 2, 26, { align: "center" });

    // Fecha alineada a la derecha
    const fechaFormateada = formatearFecha(datos.fecha);
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); //negro
    doc.text(fechaFormateada, pageWidth - 20, 50, { align: "right" });

    // A quién va dirigido
    doc.setFontSize(12);
    doc.text(`${datos.destinatarioEmpresa}.`, 12, 65); // Empresa del destinatario
    doc.text(`${datos.destinatario}.`, 12, 70); // Nombre del destinatario

    // Tabla de productos
    doc.autoTable({
      startY: 80,
      head: [["Cantidad", "Unidad", "Descripción", "Precio Unitario", "Total"]],
      body: datos.productos.map((producto) => [
        producto.cantidad,
        producto.unidad,
        producto.descripcion,
        formatNumber.format(producto.precioUnitario),
        formatNumber.format(producto.precioUnitario * producto.cantidad),
      ]),
      headStyles: { fillColor: [54, 69, 79] },
    });

    let finalY = doc.previousAutoTable.finalY + 10; // Obtener la posición final de la tabla

    // Cláusulas
    if (finalY > 270) {
      doc.addPage();
      finalY = 20;
    }
    doc.text("Cláusulas:", 12, finalY + 15);
    finalY += 10;

    datos.clausulas.forEach((clausula) => {
      if (finalY > 270) {
        doc.addPage();
        finalY = 20;
      }
      doc.text(`* ${clausula}`, 15, finalY + 10);
      finalY += 5;
    });

    // Despedida con salto de línea automático
    doc.setFontSize(12);
    const despedidaLines = doc.splitTextToSize(datos.despedida, pageWidth - 30);
    doc.text(despedidaLines, 15, finalY + 15);

    finalY += despedidaLines.length * 10 + 15; // Ajusta la posición final después de la despedida

    // Firma
    if (finalY + 20 > 270) {
      doc.addPage();
      finalY = 20;
    }
    doc.setFontSize(12);
    doc.setTextColor(96, 96, 96); // Gris oscuro
    doc.text("Atentamente", 12, finalY + 10);
    //agregar imagen de la firma
    if (firmaImg) {
      doc.addImage(firmaImg, "PNG", 10, finalY + 10, 15, 14); //ajustamos las coordenadas y el tamaño para que quede acorde entre el espacio destinado
    }
    doc.text(datos.firma, 12, finalY + 30);
    doc.setFontSize(10);
    doc.text(datos.cargo, 12, finalY + 35);

    doc.save("cotizacion.pdf");
  };

  const handleChange = (e) => {
    const el = e.target;
    setDatos({
      ...datos,
      [el.name]: el.value,
    });
  };

  return (
    <section>
      <h1 className="my-6 text-center text-2xl font-bold underline">
        Generador de cotizaciones.
      </h1>
      <h2 className="my-4 text-center text-xl font-semibold">
        Información del Remitente
      </h2>
      <form className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <Label>Nombre de la Empresa</Label>
          <TextInput id="empresa" name="empresa" onChange={handleChange} />
        </div>
        <div>
          <Label>RFC</Label>
          <TextInput
            id="rfc"
            name="rfc"
            onChange={handleChange}
            value={datos.rfc.toUpperCase()}
          />
        </div>
        <div>
          <Label>Teléfono</Label>
          <TextInput
            id="telefono"
            name="telefono"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Email</Label>
          <TextInput id="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <Label>Nombre del Representante</Label>
          <TextInput
            id="firma"
            name="firma"
            placeholder="Persona que firma"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Puesto</Label>
          <TextInput id="cargo" name="cargo" onChange={handleChange} />
        </div>
        <div>
          <Label>Fecha</Label>
          <TextInput
            id="fecha"
            name="fecha"
            type="date"
            onChange={handleChange}
          />
        </div>
      </form>
      {/* Destinatario info */}
      <h2 className="my-4 text-center text-xl font-semibold">Destinatario</h2>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <Label>Empresa Destinatario &#40;Opcional&#41;</Label>
          <TextInput
            id="destinatarioEmpresa"
            name="destinatarioEmpresa"
            onChange={handleChange}
            placeholder="Empresa a quién va dirigido"
          />
        </div>
        <div>
          <Label>Nombre Destinatario</Label>
          <TextInput
            id="destinatario"
            name="destinatario"
            onChange={handleChange}
            placeholder="A quién va dirigido"
          />
        </div>
      </section>
      {/* Productos info */}
      <section className="my-8">
        <h2 className="text-lg font-semibold">Productos</h2>
        <form className="">
          {datos.productos.map((producto, index) => (
            <div
              key={index}
              className="mb-2 grid grid-cols-1 gap-2 md:grid-cols-4"
            >
              <TextInput
                placeholder="Cantidad"
                name="cantidad"
                value={producto.cantidad}
                onChange={(e) => handleProductoChange(e, index)}
              />
              <TextInput
                placeholder="Unidad"
                name="unidad"
                value={producto.unidad}
                onChange={(e) => handleProductoChange(e, index)}
              />
              <TextInput
                placeholder="Descripción"
                name="descripcion"
                value={producto.descripcion}
                onChange={(e) => handleProductoChange(e, index)}
              />
              <TextInput
                placeholder="Precio Unitario"
                name="precioUnitario"
                type="number"
                value={producto.precioUnitario}
                onChange={(e) => handleProductoChange(e, index)}
              />
            </div>
          ))}
          <Button onClick={agregarProducto}>Agregar Producto</Button>
        </form>
      </section>
      {/* Cláusulas info */}
      <section className="my-8">
        <h2 className="text-lg font-semibold">Cláusulas</h2>
        {datos.clausulas.map((clausula, index) => (
          <TextInput
            key={index}
            placeholder={`Cláusula ${index + 1}`}
            value={clausula}
            onChange={(e) => handleClausulaChange(e, index)}
            className="mb-2"
          />
        ))}
        <Button onClick={agregarClausula}>Agregar Cláusula</Button>
      </section>
      {/* Cargar firma */}
      <section className="my-5">
        <h2 className="my-4 text-center text-xl font-semibold">
          Cargar firma digital
        </h2>
        <div>
          <Label>Firma</Label>
          <FileInput
            id="firmaImg"
            name="firmaImg"
            onChange={handleFirmaChange}
            accept="image/*"
            helperText="Si tienes la firma en imagen PNG, aqui la puedes cargar."
          />
        </div>
      </section>
      <Button color="dark" size="xl" onClick={generarPDF}>
        Generar PDF
      </Button>
    </section>
  );
}
