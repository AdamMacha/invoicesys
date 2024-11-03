'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, PieChart, Settings2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-lg mx-auto md:mx-0"
              >
                <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Moderní fakturační systém pro{' '}
                  <span className="text-primary">vaše podnikání</span>
                </h1>
                <p className="mb-8 text-lg text-muted-foreground">
                  Zjednodušte své účetnictví s naším intuitivním systémem pro
                  správu faktur. Vytvářejte profesionální faktury během několika
                  sekund.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link href="/nova-faktura">
                    <Button size="lg" className="w-full sm:w-auto">
                      Vytvořit fakturu
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/faktury">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Prohlédnout faktury
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="Dashboard Preview"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Vše, co potřebujete pro správu faktur
            </h2>
            <p className="text-lg text-muted-foreground">
              Náš systém nabízí komplexní řešení pro vaše fakturační potřeby
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 text-center bg-card rounded-lg shadow-lg border border-border/50"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Snadná tvorba faktur
              </h3>
              <p className="text-muted-foreground">
                Vytvářejte profesionální faktury pomocí intuitivního rozhraní
                během několika kliknutí.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 text-center bg-card rounded-lg shadow-lg border border-border/50"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <PieChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Přehledné statistiky
              </h3>
              <p className="text-muted-foreground">
                Sledujte své příjmy a výdaje pomocí interaktivních grafů a
                detailních přehledů.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 text-center bg-card rounded-lg shadow-lg border border-border/50"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                <Settings2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Pokročilé nastavení
              </h3>
              <p className="text-muted-foreground">
                Přizpůsobte si systém podle svých potřeb včetně automatického
                číslování a notifikací.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Začněte používat náš systém ještě dnes
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Vyzkoušejte všechny funkce a zjednodušte si správu faktur
          </p>
          <Link href="/nova-faktura">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-6 text-lg h-auto"
            >
              Vytvořit první fakturu
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
