import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriAna | Nutrição personalizada",
  description:
    "Nutrição personalizada para transformar sua relação com a alimentação e construir uma rotina mais saudável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
