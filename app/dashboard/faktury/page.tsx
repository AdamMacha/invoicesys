"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InvoiceList } from "@/components/InvoiceList";
import { Search, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function InvoicesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Faktury</h1>
        <Link href="/nova-faktura">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nová faktura
          </Button>
        </Link>
      </div>

      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Hledat faktury..."
              className="pl-8"
            />
          </div>
        </div>
        <div className="w-[180px]">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Všechny statusy</SelectItem>
              <SelectItem value="paid">Zaplaceno</SelectItem>
              <SelectItem value="pending">Čeká na platbu</SelectItem>
              <SelectItem value="overdue">Po splatnosti</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[180px]">
          <Select defaultValue="newest">
            <SelectTrigger>
              <SelectValue placeholder="Řazení" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Nejnovější</SelectItem>
              <SelectItem value="oldest">Nejstarší</SelectItem>
              <SelectItem value="highest">Nejvyšší částka</SelectItem>
              <SelectItem value="lowest">Nejnižší částka</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <InvoiceList />
    </div>
  );
}