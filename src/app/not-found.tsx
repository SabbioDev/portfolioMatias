import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-heading text-8xl font-extrabold text-gradient">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
        Esta página no existe
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        El link que seguiste no lleva a ningún lado. Volvé al inicio para
        conocer mi trabajo.
      </p>
      <Button asChild className="mt-8 rounded-full">
        <Link href="/">
          <ArrowLeft aria-hidden data-icon="inline-start" />
          Volver al inicio
        </Link>
      </Button>
    </div>
  );
}
