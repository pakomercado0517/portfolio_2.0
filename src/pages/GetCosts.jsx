import { useState } from "react";
import CreatePDF from "../components/CreatePDF";

function GetCosts() {
  const initialState = {
    rfc: "",
    total: "",
    subtotal: "",
  };
  const [formData, setFormData] = useState(initialState);

  const [costo, setCost] = useState([]);
  const styleInput = `border border-slate-600 rounded-md my-2`;

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      subtotal: formData.total / 1.16,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = [];
    const existingData = costo.find(({ rfc }) => rfc === formData.rfc);
    if (existingData) {
      // Update existing data
      const updateCosts = costo.map((c) => {
        if (c.rfc === formData.rfc) {
          return {
            ...formData,
            total: parseInt(c.total) + parseInt(formData.total),
            subtotal: c.subtotal + formData.subtotal,
          };
        }
        return c;
      });
      setCost(updateCosts);
    } else {
      // Add new data to array
      costo.length > 0 ? arr.push(...costo, formData) : arr.push(formData);
      setCost(arr);
    }
    setFormData(initialState);
  };

  const getResults = () => {
    const arr = [];
    costo.map((el) => arr.push(parseInt(el.total)));
    let total = arr.reduce((a, b) => a + b, 0);
    total = total.toString().split(".");
    total[0] = total[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return total.join(".");
  };

  const getSubtotal = (num) => {
    let result;
    result = num / 1.16;
    result = result.toFixed(2);
    result = result.toString().split(".");
    result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result.join(".");
  };

  const getTotal = (num) => {
    const parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  return (
    <div className={`w-screen flex  items-center flex-col mx-5 mt-14`}>
      <form>
        <div>
          <h2>Ingresa el RFC:</h2>
          <input
            className={styleInput}
            type="text"
            name="rfc"
            value={formData.rfc}
            onChange={handleChange}
          />
        </div>
        <div>
          <h2>Ingresa el monto del costo:</h2>
          <input
            className={styleInput}
            name="total"
            value={formData.total}
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className={`${styleInput} w-32 h-8 bg-blue-600 text-white`}
            onClick={handleSubmit}
          >
            Agregar Gasto
          </button>
        </div>
      </form>

      {/* Here showing the table with the data... */}
      {/* component */}

      <section className="antialiased bg-gray-100 text-gray-600 h-auto w-screen px-4">
        <div className="flex flex-col justify-center h-full">
          {/* Table */}
          <div
            className={`w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200`}
          >
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">
                Lista de Gastos comprados
              </h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">RFC</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Monto sin IVA
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Monto total $
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {costo.map((el) => {
                      return (
                        <tr key={el.rfc}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="font-medium text-gray-800">
                                {el.rfc}
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-blue-500">
                              {getSubtotal(el.total)}
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-green-500">
                              {getTotal(el.total)}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="p-2 whitespace-nowrap"></td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-600">Total</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-green-700">
                          {`$${getResults()}`}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CreatePDF costo={costo} />
    </div>
  );
}

export default GetCosts;
