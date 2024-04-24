import { useState, useEffect } from "react";
import { TextInput, Button, Label } from "flowbite-react";

export default function MaterialControlForm() {
  const [data, setData] = useState({
    company: "",
    materialName: "",
    price: 0,
    cubicMeters: 0,
    pavementDistance: 0,
    dirtRoadDistance: 0,
  });

  const [finalInfo, setFinalInfo] = useState({
    totalPrice: 0, //monto total de los m3 por el precio por m3
    totalDistance: 0, //obtener el monto total de kilometros mas los 2 de inicio
    totalCTM: 0, //el monto total del precio de ctm
    sutermPercentage: 0, //pago de suterm menos el 10%
    kmPay: 0, //pago $0.25 por km recorrido
    transportPay: 0, //pago de acarreo a suterm menos el 10% será de 485.10
    rateDifference: 0, //diferencia de tarifa(3)
    materialBank: 0, //material (costo bancos)
    utility: 0, //utilidad
  });

  //Para mañana debes crear la función en la que de acuerdo a los kilometros obtenidos, te de el precio de CTM (recuerda que debes aumentar al final el monto de 41.58 por las 2 horas iniciales, tanto pavimento como terraceria)

  const getTotalPrice = (price, cubicMeters) => price * cubicMeters;

  const getKmPay = (k, m) => 0.25 * k * m;

  const getSutermPercentage = (m) => m * 62.261;

  const getTotalCTM = (amount) => 566.61 * amount;

  const getTransportPay = (total, percentage, kmpay) =>
    total - percentage - kmpay;

  const getRateDifference = (m, amount1, amount2, amount3) => {
    const totalValue = 622.61 * m;
    return totalValue - amount1 - amount2 - amount3; //amount1, amount2 y amount3 equivalen al 10% y 0.25 y el acarreo ctm que se restaran para obtener la diferencia de tarifa
  };

  const getMaterialBank = (m) => 110 * m;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  useEffect(() => {
    if (data.lengt !== 0) {
      getTotalPrice(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, finalInfo.totalDistance, setFinalInfo]);

  useEffect(() => {
    setFinalInfo({
      ...finalInfo,
      totalPrice: getTotalPrice(data.price, data.cubicMeters),
      totalDistance:
        parseInt(data.pavementDistance) + parseInt(data.dirtRoadDistance) + 2,
      totalCTM: getTotalCTM(parseInt(data.cubicMeters)),
      kmPay: getKmPay(finalInfo.totalDistance, parseInt(data.cubicMeters)),
      sutermPercentage: getSutermPercentage(parseInt(data.cubicMeters)),
      transportPay: getTransportPay(
        finalInfo.totalCTM,
        finalInfo.sutermPercentage,
        finalInfo.kmPay,
      ),
      rateDifference: getRateDifference(
        parseInt(data.cubicMeters),
        finalInfo.sutermPercentage,
        finalInfo.kmPay,
        finalInfo.transportPay,
      ),
      materialBank: getMaterialBank(parseInt(data.cubicMeters)),
      utility:
        finalInfo.totalPrice -
        finalInfo.sutermPercentage -
        finalInfo.kmPay -
        finalInfo.transportPay -
        finalInfo.rateDifference -
        finalInfo.materialBank,
    });
  }, [
    data.cubicMeters,
    finalInfo.totalDistance,
    data.dirtRoadDistance,
    data.pavementDistance,
    finalInfo.kmPay,
    finalInfo.sutermPercentage,
    finalInfo.totalCTM,
  ]);

  console.log("finalInfo", finalInfo);
  console.log("data", data);

  return (
    <section>
      <h1 className="my-8 text-center text-2xl font-bold">
        Conciliación de Materiales
      </h1>
      <form className="grid grid-cols-3 gap-20">
        <div>
          <Label>Sociedad</Label>
          <TextInput onChange={handleChange} type="text" name="company" />
        </div>
        <div>
          <Label>Material del concepto</Label>
          <TextInput onChange={handleChange} type="text" name="materialName" />
        </div>
        <div>
          <Label>Costo M3 &#40;Precio Unitario&#41;</Label>
          <TextInput onChange={handleChange} type="number" name="price" />
        </div>
        <div>
          <Label>Cantidad de M3 &#40;Metros cúbicos&#41;</Label>
          <TextInput onChange={handleChange} type="number" name="cubicMeters" />
        </div>
        <div>
          <Label>Km Pavimento</Label>
          <TextInput
            onChange={handleChange}
            type="number"
            name="pavementDistance"
          />
        </div>
        <div>
          <Label>Km Terracería</Label>
          <TextInput
            onChange={handleChange}
            type="number"
            name="dirtRoadDistance"
          />
        </div>
        <Button>Agregar Concepto</Button>
        <Button color="dark">Crear PDF</Button>
      </form>
    </section>
  );
}
