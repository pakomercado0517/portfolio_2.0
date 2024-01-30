/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";

export default function PaybackTable({ data }) {
  return (
    <section>
      <Table>
        <Table.Head>
          <Table.HeadCell>Empresa</Table.HeadCell>
          <Table.HeadCell>Monto</Table.HeadCell>
          <Table.HeadCell>Comisión</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="border-gray-600">
            <Table.Cell>{data?.empresa}</Table.Cell>
            <Table.Cell>{data?.monto}</Table.Cell>
            <Table.Cell>{data?.comision}</Table.Cell>
            <Table.Cell>{data?.total}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </section>
  );
}
