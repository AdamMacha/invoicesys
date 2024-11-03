"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecentInvoices() {
  const invoices = [
    {
      id: "INV-001",
      customer: "Firma ABC s.r.o.",
      date: "2024-03-15",
      amount: "25,000 Kč",
      status: "Zaplaceno",
    },
    {
      id: "INV-002",
      customer: "XYZ Group a.s.",
      date: "2024-03-14",
      amount: "15,000 Kč",
      status: "Čeká na platbu",
    },
    {
      id: "INV-003",
      customer: "Tech Solutions s.r.o.",
      date: "2024-03-13",
      amount: "42,000 Kč",
      status: "Zaplaceno",
    },
    {
      id: "INV-004",
      customer: "Digital Services a.s.",
      date: "2024-03-12",
      amount: "18,500 Kč",
      status: "Po splatnosti",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Poslední faktury</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Číslo faktury</TableHead>
              <TableHead>Zákazník</TableHead>
              <TableHead>Datum</TableHead>
              <TableHead>Částka</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Akce</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      invoice.status === "Zaplaceno"
                        ? "success"
                        : invoice.status === "Čeká na platbu"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}