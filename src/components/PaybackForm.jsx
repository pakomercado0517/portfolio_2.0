/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import CurrencyInput from "react-currency-input-field";

export default function PaybackForm({
  handleChange,
  data,
  handleSubmit,
  addCell,
  handleCurrencyInput,
  handleTax,
}) {
  return (
    <section>
      <form className="mt-5">
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre de la empresa
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="number"
              name="percentage"
              id="percentage"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              defaultValue={data?.percentage}
            />
            <label
              htmlFor="percentage"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Porcentaje
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              onChange={handleTax}
              name="beforeTax"
              id="beforeTax"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            >
              <option>Selecciona una opción</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
            <label
              htmlFor="beforeTax"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Antes IVA?
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            {/* <input
              onChange={handleChange}
              type="text"
              name="total"
              id="total"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            /> */}
            <CurrencyInput
              id="total"
              name="total"
              decimalsLimit={2}
              defaultValue={data.total}
              onValueChange={handleCurrencyInput}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              intlConfig={{ locale: "es-MX", currency: "MXN" }}
            />
            <label
              htmlFor="total"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Monto
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button color="dark" onClick={handleSubmit}>
            Crear PDF
          </Button>
          <Button onClick={addCell}>Agregar registro</Button>
        </div>
      </form>
    </section>
  );
}
