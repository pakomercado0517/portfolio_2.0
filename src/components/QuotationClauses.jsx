/* eslint-disable react/prop-types */
import { TextInput, Button } from "flowbite-react";
export default function QuotationClauses({
  datos,
  handleClausulaChange,
  agregarClausula,
}) {
  return (
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
  );
}
