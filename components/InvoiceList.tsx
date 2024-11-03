"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const invoices = [
  {
    id: "INV-001",
    customer: "Firma ABC s.r.o.",
    date: "2024-03-15",
    dueDate: "2024-03-29",
    amount: "25,000 Kč",
    status: "Zaplaceno",
  },
  {
    id: "INV-002",
    customer: "XYZ Group a.s.",
    date: "2024-03-14",
    dueDate: "2024-03-28",
    amount: "15,000 Kč",
    status: "Čeká na platbu",
  },
  {
    id: "INV-003",
    customer: "Tech Solutions s.r.o.",
    date: "2024-03-13",
    dueDate: "2024-03-27",
    amount: "42,000 Kč",
    status: "Zaplaceno",
  },
  {
    id: "INV-004",
    customer: "Digital Services a.s.",
    date: "2024-03-12",
    dueDate: "2024-03-26",
    amount: "18,500 Kč",
    status: "Po splatnosti",
  },
  {
    id: "INV-005",
    customer: "WebDev Plus s.r.o.",
    date: "2024-03-11",
    dueDate: "2024-03-25",
    amount: "33,000 Kč",
    status: "Zaplaceno",
  },
  {
    id: "INV-006",
    customer: "Marketing Pro a.s.",
    date: "2024-03-10",
    dueDate: "2024-03-24",
    amount: "55,000 Kč",
    status: "Čeká na platbu",
  },
];

export function InvoiceList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Číslo faktury</TableHead>
            <TableHead>Zákazník</TableHead>
            <TableHead>Datum vystavení</TableHead>
            <TableHead>Datum splatnosti</TableHead>
            <TableHead>Částka</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Akce</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.dueDate}</TableCell>
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
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Označit jako zaplacené</DropdownMenuItem>
                      <DropdownMenuItem>Upravit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Smazat
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}