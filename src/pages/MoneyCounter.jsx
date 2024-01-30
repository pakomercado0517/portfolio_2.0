/* eslint-disable react/no-unknown-property */
import { useState } from "react";

function MoneyCounter() {
  const [counter, setCounter] = useState({
    1000: 0,
    500: 0,
    200: 0,
    100: 0,
    50: 0,
    20: 0,
  });

  const [total, setTotal] = useState({});

  const handleChange = async (e) => {
    setCounter({
      ...counter,
      [e.target.name]: e.target.value,
    });
    setTotal({
      ...total,
      [e.target.name]: parseInt(e.target.name) * e.target.value,
    });
  };

  const formatNumber = (num) => {
    if (num !== undefined) {
      num = num.toString().split(",");
      num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num.join(".");
    }
  };

  const getResults = () => {
    let $total = Object.values(total);
    $total = $total.reduce((a, b) => a + b, 0);
    return formatNumber($total);
  };

  return (
    <>
      <section
        className="antialiased bg-gray-100 text-gray-600 h-screen px-4"
        x-data="app"
      >
        <div className="flex flex-col justify-center h-full">
          {/* <!-- Table --> */}
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="font-semibold text-gray-800">
                Contador de Dinero{" "}
                <span className="font-light text-md text-slate-500 ml-4">
                  (Ingresa el número de billetes que vayas contando)
                </span>
              </div>
            </header>

            <div className="overflow-x-auto p-3">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">
                        Billete (Denominación)
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Cantidad</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Total</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-2">
                      <div className="font-medium text-gray-800">$1,000</div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">
                        <input
                          onChange={handleChange}
                          className="border border-slate-400 rounded-md"
                          type="number"
                          name="1000"
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        ${formatNumber(total[1000])}
                      </div>
                    </td>
                  </tr>

                  {/* <!-- record 2 --> */}
                  <tr>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">$500</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">
                        <input
                          onChange={handleChange}
                          className="border border-slate-400 rounded-md"
                          type="number"
                          name="500"
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        ${formatNumber(total[500])}
                      </div>
                    </td>
                  </tr>

                  {/* <!-- record 3 --> */}
                  <tr>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">$200</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">
                        <input
                          onChange={handleChange}
                          className="border border-slate-400 rounded-md"
                          type="number"
                          name="200"
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        ${formatNumber(total[200])}
                      </div>
                    </td>
                  </tr>

                  {/* record 4 */}
                  <tr>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">$100</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">
                        <input
                          onChange={handleChange}
                          className="border border-slate-400 rounded-md"
                          type="number"
                          name="100"
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        ${formatNumber(total[100])}
                      </div>
                    </td>
                  </tr>

                  {/* record 5 */}
                  <tr>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">$50</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">
                        <input
                          onChange={handleChange}
                          className="border border-slate-400 rounded-md"
                          type="number"
                          name="50"
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        ${formatNumber(total[50])}
                      </div>
                    </td>
                  </tr>

                  {/* record 6 */}
                  <tr>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">$20</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left">
                        <input
                          onChange={handleChange}
                          className="border border-slate-400 rounded-md"
                          type="number"
                          name="20"
                        />
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left font-medium text-green-500">
                        ${formatNumber(total[20])}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- total amount --> */}
            <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
              <div>Total</div>
              <div className="text-blue-600">
                $ <span x-text="total.toFixed(2)"></span>
                {getResults()}
              </div>
            </div>

            <div className="flex justify-end">
              {/* <!-- send this data to backend (note: use className 'hidden' to hide this input) --> */}
              <input
                type="hidden"
                className="border border-black bg-gray-50"
                x-model="selected"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MoneyCounter;
