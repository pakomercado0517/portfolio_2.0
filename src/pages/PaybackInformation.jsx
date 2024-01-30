import { useState, useEffect } from "react";
import PaybackForm from "../components/PaybackForm";
import PaybackTable from "../components/PaybackTable";
import useCreatePDF from "../hooks/useCreatePDF";
import useFormatNumber from "../hooks/useFormatNumber";

function PaybackInformation() {
  const [getTotal, setGetTotal] = useState([]);
  const [cell, setCell] = useState([]);
  const [beforeTax, setBeforeTax] = useState(false);
  const [data, setData] = useState({});
  const createDocument = useCreatePDF();
  const formatNumber = useFormatNumber();

  useEffect(() => {
    if (data.length !== 0) {
      if (!beforeTax) {
        const totalMount = data.total * (1 - data.percentage / 100);
        const comision = data.total * `0.0${data.percentage}`;
        setGetTotal({
          empresa: data.name,
          monto: formatNumber.format(data.total),
          comision: formatNumber.format(comision),
          total: formatNumber.format(totalMount),
        });
      } else {
        const montoAntesIVA = data.total / 1.16;
        const getComision = (montoAntesIVA * data.percentage) / 100;
        const costTotal = data.total - getComision;

        setGetTotal({
          empresa: data.name,
          monto: formatNumber.format(data.total),
          comision: formatNumber.format(getComision),
          total: formatNumber.format(costTotal),
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, beforeTax]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCurrencyInput = (value) => {
    setData({
      ...data,
      total: value === undefined ? "" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createDocument(getTotal, false);
  };

  const handleTax = (e) => {
    e.target.value === "si" ? setBeforeTax(true) : setBeforeTax(false);
  };

  const addCell = (arr) => {
    const $arr = [];
    $arr.push(...cell, arr);
    setCell($arr);
  };

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl my-10 text-center underline">
        Obtener monto a devolver
      </h1>
      <article>
        <PaybackForm
          handleChange={handleChange}
          data={data}
          handleSubmit={handleSubmit}
          addCell={() => addCell(getTotal)}
          handleCurrencyInput={handleCurrencyInput}
          handleTax={handleTax}
        />
      </article>
      <article className={`mt-10`}>
        <PaybackTable data={cell} />
      </article>
    </section>
  );
}

export default PaybackInformation;
