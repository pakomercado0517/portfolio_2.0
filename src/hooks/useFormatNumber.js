// export default function useFormatNumber() {
//   const formatNumber = (num) => {

//     return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };
//   return formatNumber;
// }

// export default function useFormatNumber() {
//   const formatNumber = (num) => {
//     let result;
//     result = num.toString().split(".");
//     console.log("result", result);
//     result = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return result.join(".");
//   };
//   return formatNumber;
// }
export default function useFormatNumber() {
  const formatNumber = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  return formatNumber;
}
