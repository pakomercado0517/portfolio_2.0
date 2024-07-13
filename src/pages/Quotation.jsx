import { useState } from "react";
import "jspdf-autotable";
import { TextInput, Label } from "flowbite-react";
import QuotationForm from "../components/QuotationForm";
import QuotationPDFButtons from "../components/QuotationPDFButtons";
import QuotationProducts from "../components/QuotationProducts";
import QuotationClauses from "../components/QuotationClauses";
import PDFPreviewer from "../components/PDFPreviewer";
import QuotationDataBank from "../components/QuotationDataBank";

export default function Quotation() {
  const [datos, setDatos] = useState({
    empresa: "",
    rfc: "",
    telefono: 0,
    email: "",
    fecha: "",
    destinatario: "",
    destinatarioEmpresa: "",
    bank: "",
    despedida:
      "Sin más, quedo a sus órdenes ante cualquier duda, situación o comentario de su parte agradeciendo de antemano las atenciones prestadas.",
    saludo:
      "Buen día, se presenta a continuación, la cotización de los siguientes servicios y/o materiales:",
    productos: [],
    clausulas: [],
    firma: "",
    cargo: "",
  });

  const [dataBank, setDataBank] = useState([
    {
      "Nombre del Banco": "",
      "Número de cuenta": 0,
      "Clabe Interbancaria": 0,
    },
  ]);

  console.log("dataBank", dataBank);

  const [pdfDataUrl, setPdfDataUrl] = useState(null);

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

  const handleDataBankChange = (e) =>
    setDataBank({ ...dataBank, [e.target.name]: e.target.value });

  const showDataBank = (e) => setDatos({ ...datos, bank: e.target.value });

  const handleChange = (e) => {
    const el = e.target;
    setDatos({
      ...datos,
      [el.name]: el.value,
    });
  };

  return (
    <section>
      {/* Quotation Form */}
      <QuotationForm handleChange={handleChange} datos={datos} />
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
      <QuotationProducts
        datos={datos}
        handleProductoChange={handleProductoChange}
        agregarProducto={agregarProducto}
      />
      {/* Cláusulas info */}
      <QuotationClauses
        datos={datos}
        handleClausulaChange={handleClausulaChange}
        agregarClausula={agregarClausula}
      />
      {/* Datos bancarios */}
      <QuotationDataBank
        handleDataBankChange={handleDataBankChange}
        showDataBank={showDataBank}
        datos={datos}
      />
      {/* Botones para cargar firma, previsualizar y crear PDF */}
      <QuotationPDFButtons
        datos={datos}
        setPdfDataUrl={setPdfDataUrl}
        dataBank={dataBank}
      />

      {/* Previsualizar PDF */}
      {pdfDataUrl && <PDFPreviewer pdfDataUrl={pdfDataUrl} />}
    </section>
  );
}
