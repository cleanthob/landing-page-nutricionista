"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Leaf,
  Menu,
  MessageCircle,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

const whatsappNumber = "5583999999999";

function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const services = [
  {
    title: "Emagrecimento",
    description:
      "Estratégias sustentáveis para alcançar seus objetivos sem dietas extremas.",
    icon: "01",
  },
  {
    title: "Reeducação alimentar",
    description:
      "Construa hábitos mais equilibrados e uma relação mais tranquila com a comida.",
    icon: "02",
  },
  {
    title: "Nutrição esportiva",
    description:
      "Alimentação planejada para apoiar seus treinos, recuperação e desempenho.",
    icon: "03",
  },
  {
    title: "Saúde e bem-estar",
    description:
      "Um plano individualizado para cuidar da sua saúde através da alimentação.",
    icon: "04",
  },
];

const testimonials = [
  {
    name: "Mariana Alves",
    text: "Finalmente encontrei uma forma de me alimentar melhor sem sentir que estou vivendo de dieta. O acompanhamento fez toda a diferença.",
  },
  {
    name: "Juliana Costa",
    text: "O plano foi adaptado completamente à minha rotina. Hoje tenho muito mais organização e disposição no dia a dia.",
  },
  {
    name: "Camila Ferreira",
    text: "A consulta foi leve, clara e muito prática. Aprendi a fazer escolhas melhores sem abrir mão dos alimentos que gosto.",
  },
];

const faqs = [
  {
    question: "A consulta pode ser online?",
    answer:
      "Sim. O atendimento pode ser realizado online, com a mesma atenção e personalização do acompanhamento presencial.",
  },
  {
    question: "O plano alimentar é personalizado?",
    answer:
      "Sim. O planejamento considera seus objetivos, rotina, preferências alimentares e contexto individual.",
  },
  {
    question: "Preciso cortar completamente doces?",
    answer:
      "Não. A proposta é construir uma alimentação equilibrada e sustentável, considerando também os alimentos que você gosta.",
  },
  {
    question: "Como funciona o acompanhamento?",
    answer:
      "Após a avaliação inicial, são definidos objetivos e estratégias. Os retornos servem para acompanhar sua evolução e ajustar o planejamento.",
  },
];

export default function NutritionLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);

  const year = new Date().getFullYear();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-bold text-[#3d3032]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e85d75] text-white">
              <Leaf size={18} />
            </span>
            <span>
              Nutri<span className="text-[#e85d75]">Ana</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-[#66585b] md:flex">
            <a className="transition hover:text-[#e85d75]" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-[#e85d75]" href="#servicos">
              Serviços
            </a>
            <a
              className="transition hover:text-[#e85d75]"
              href="#como-funciona"
            >
              Como funciona
            </a>
            <a className="transition hover:text-[#e85d75]" href="#faq">
              FAQ
            </a>
          </div>

          <a
            href={whatsappUrl("Olá, Ana! Gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#e85d75] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#c9445d] md:block"
          >
            Agendar consulta
          </a>

          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#fde8ed] text-[#c9445d] md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/80 bg-white p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              {[
                ["Sobre", "#sobre"],
                ["Serviços", "#servicos"],
                ["Como funciona", "#como-funciona"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#66585b]"
                >
                  {label}
                </a>
              ))}
              <a
                href={whatsappUrl(
                  "Olá, Ana! Gostaria de agendar uma consulta.",
                )}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#e85d75] px-5 py-3 text-center text-white"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative bg-[#fffaf8] pt-32">
        <div className="absolute -right-32 top-32 h-72 w-72 rounded-full bg-[#fde8ed] blur-3xl" />
        <div className="container-page grid min-h-[720px] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f6c6cf] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#c9445d]">
              <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
              Nutrição personalizada
            </div>

            <h1 className="max-w-2xl text-balance text-5xl font-black leading-[1.02] tracking-[-0.04em] text-[#3d3032] sm:text-6xl lg:text-7xl">
              Uma alimentação equilibrada para uma{" "}
              <span className="text-[#e85d75]">vida mais leve.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#75686b]">
              Cuidar da alimentação não precisa ser complicado. Encontre uma
              estratégia que faça sentido para sua rotina, seus objetivos e sua
              vida real.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl(
                  "Olá, Ana! Quero saber mais sobre o acompanhamento nutricional.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e85d75] px-7 py-4 font-bold text-white shadow-lg shadow-[#e85d75]/20 transition hover:-translate-y-0.5 hover:bg-[#c9445d]"
              >
                Quero cuidar da minha alimentação
                <ArrowRight size={18} />
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ead8db] bg-white px-7 py-4 font-bold text-[#554649] transition hover:border-[#e85d75] hover:text-[#c9445d]"
              >
                Conheça meu trabalho
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#75686b]">
              {[
                "Atendimento individualizado",
                "Online e presencial",
                "Plano personalizado",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#fde8ed] text-[#e85d75]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -left-5 top-14 z-20 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-left-10">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#fde8ed] text-[#e85d75]">
                  <Leaf size={22} />
                </div>
                <div>
                  <p className="text-xs text-[#88797c]">Foco em</p>
                  <p className="font-bold text-[#3d3032]">Saúde & equilíbrio</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[45%_45%_20%_20%] bg-[#f7c4cc] p-3">
              <div className="overflow-hidden rounded-[43%_43%_18%_18%]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85"
                  alt="Nutricionista sorrindo"
                  width={900}
                  height={1100}
                  priority
                  className="h-[580px] w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-3 rounded-3xl bg-[#ff6b6b] px-5 py-4 text-white shadow-xl sm:-right-8">
              <p className="text-2xl font-black">+500</p>
              <p className="text-xs font-medium opacity-90">
                pacientes acompanhados
              </p>
            </div>

            <div className="absolute -bottom-7 -left-6 grid h-20 w-20 place-items-center rounded-full border-8 border-[#fffaf8] bg-[#6e9d74] shadow-lg">
              <div className="flex gap-1">
                <span className="watermelon-seed" />
                <span className="watermelon-seed" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container-page grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md">
              <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#fde8ed]" />
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85"
                alt="Alimentação saudável"
                width={800}
                height={900}
                className="relative h-[520px] w-full rounded-[35px] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 rounded-3xl bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#e85d75] text-white">
                    <Star size={19} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-black text-[#3d3032]">5.0</p>
                    <p className="text-xs text-[#88797c]">avaliação média</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#e85d75]">
              Sobre mim
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#3d3032] sm:text-5xl">
              Nutrição que cabe na sua vida.
            </h2>
            <p className="mt-6 leading-8 text-[#75686b]">
              Sou Ana Martins, nutricionista especializada em transformar
              informação nutricional em escolhas simples e possíveis para cada
              pessoa.
            </p>
            <p className="mt-4 leading-8 text-[#75686b]">
              Meu trabalho é baseado em escuta, individualidade e estratégias
              práticas. O objetivo é ajudar você a construir uma rotina
              alimentar equilibrada sem depender de soluções radicais.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["CRN 12345", "Registro profissional"],
                ["5+ anos", "De experiência"],
                ["500+", "Pacientes acompanhados"],
                ["Online", "Atendimento em todo o Brasil"],
              ].map(([number, label]) => (
                <div key={number} className="rounded-2xl bg-[#fff7f8] p-5">
                  <p className="text-xl font-black text-[#e85d75]">{number}</p>
                  <p className="mt-1 text-sm text-[#75686b]">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="section-padding bg-[#fff3f5]">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#e85d75]">
              Como posso ajudar
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#3d3032] sm:text-5xl">
              Um plano pensado para você
            </h2>
            <p className="mt-5 leading-7 text-[#75686b]">
              Cada pessoa possui uma rotina, necessidades e objetivos
              diferentes. Por isso, o acompanhamento é individualizado.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[28px] border border-[#f5d9df] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e85d75]/10"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fde8ed] font-black text-[#e85d75]">
                    {service.icon}
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-[#dcbcc2] transition group-hover:translate-x-1 group-hover:text-[#e85d75]"
                  />
                </div>
                <h3 className="mt-8 text-xl font-black text-[#3d3032]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#75686b]">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.18em] text-[#e85d75]">
                Como funciona
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#3d3032] sm:text-5xl">
                Simples, individual e sem complicação.
              </h2>
              <p className="mt-5 leading-8 text-[#75686b]">
                O acompanhamento é construído junto com você, respeitando seu
                momento e sua rotina.
              </p>
              <a
                href={whatsappUrl(
                  "Olá, Ana! Quero começar meu acompanhamento nutricional.",
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#3d3032] px-6 py-3.5 font-bold text-white transition hover:bg-[#e85d75]"
              >
                Começar acompanhamento
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="grid gap-4">
              {[
                [
                  "01",
                  "Avaliação",
                  "Conversamos sobre seus objetivos, rotina, hábitos e necessidades.",
                ],
                [
                  "02",
                  "Plano personalizado",
                  "Definimos estratégias alimentares práticas e adequadas à sua realidade.",
                ],
                [
                  "03",
                  "Acompanhamento",
                  "Avaliamos sua evolução e ajustamos o planejamento quando necessário.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  whileHover={{ x: 5 }}
                  className="flex gap-5 rounded-3xl border border-[#eee0e2] bg-[#fffaf8] p-6"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e85d75] font-black text-white">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-black text-[#3d3032]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#75686b]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-[#3d3032]">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#ff9aaa]">
              Depoimentos
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Experiências de quem já começou
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7"
              >
                <div className="flex gap-1 text-[#ff8797]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 leading-7 text-white/75">
                  “{testimonial.text}”
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#e85d75] text-sm font-black text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#fff3f5] py-24">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#f8cbd3] blur-3xl" />
        <div className="container-page relative">
          <div className="rounded-[38px] bg-[#e85d75] px-7 py-14 text-center text-white shadow-2xl shadow-[#e85d75]/20 sm:px-12">
            <div className="mx-auto max-w-3xl">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-white/75">
                Seu próximo passo
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Pronta para começar a cuidar melhor da sua alimentação?
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
                Agende sua consulta e vamos construir uma estratégia que faça
                sentido para você.
              </p>
              <a
                href={whatsappUrl(
                  "Olá, Ana! Gostaria de agendar minha consulta.",
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#c9445d] transition hover:-translate-y-0.5"
              >
                <MessageCircle size={19} />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="section-padding bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#e85d75]">
              Entre em contato
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#3d3032]">
              Vamos conversar?
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-[#75686b]">
              Preencha o formulário e envie uma mensagem. Em seguida, entrarei
              em contato para entender o que você procura.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl bg-[#fff7f8] p-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#fde8ed] text-[#e85d75]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#88797c]">WhatsApp</p>
                  <p className="font-bold text-[#3d3032]">(83) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-[#fff7f8] p-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#fde8ed] text-[#e85d75]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#88797c]">Instagram</p>
                  <p className="font-bold text-[#3d3032]">@nutriana</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[30px] border border-[#f0dfe2] bg-[#fffaf8] p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#554649]">Nome</span>
                <input
                  required
                  name="name"
                  placeholder="Seu nome"
                  className="rounded-2xl border border-[#ead8db] bg-white px-4 py-3.5 outline-none transition placeholder:text-[#b4a5a8] focus:border-[#e85d75] focus:ring-4 focus:ring-[#e85d75]/10"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#554649]">
                  WhatsApp
                </span>
                <input
                  required
                  name="phone"
                  placeholder="(00) 00000-0000"
                  className="rounded-2xl border border-[#ead8db] bg-white px-4 py-3.5 outline-none transition placeholder:text-[#b4a5a8] focus:border-[#e85d75] focus:ring-4 focus:ring-[#e85d75]/10"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-[#554649]">
                  Como posso ajudar?
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Conte brevemente o que você procura..."
                  className="resize-none rounded-2xl border border-[#ead8db] bg-white px-4 py-3.5 outline-none transition placeholder:text-[#b4a5a8] focus:border-[#e85d75] focus:ring-4 focus:ring-[#e85d75]/10"
                />
              </label>

              <button
                type="submit"
                className="rounded-full bg-[#e85d75] px-6 py-4 font-black text-white transition hover:bg-[#c9445d]"
              >
                Enviar mensagem
              </button>

              {formSent && (
                <p className="rounded-2xl bg-[#eaf5eb] px-4 py-3 text-sm font-semibold text-[#47734d]">
                  Mensagem enviada! Em uma aplicação real, este formulário pode
                  ser conectado a uma API, e-mail ou WhatsApp.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-[#fff3f5]">
        <div className="container-page max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-[#e85d75]">
              FAQ
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#3d3032] sm:text-5xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#f0d8de] bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-bold text-[#3d3032]"
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#e85d75] transition ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm leading-7 text-[#75686b]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3d3032] py-10 text-white">
        <div className="container-page flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <a href="#inicio" className="text-xl font-black">
              Nutri<span className="text-[#ff8c9c]">Ana</span>
            </a>
            <p className="mt-1 text-sm text-white/50">
              Nutrição personalizada para a vida real.
            </p>
          </div>

          <div className="flex items-center gap-5 text-sm text-white/60">
            <a href="#sobre" className="hover:text-white">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-white">
              Serviços
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-[#e85d75]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="container-page mt-8 border-t border-white/10 pt-6 text-xs text-white/40">
          © {year} NutriAna. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
