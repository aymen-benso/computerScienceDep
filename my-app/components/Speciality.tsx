"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Speciality() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
      title: "SIQ",
      description:
        "Spécialisation dans les systèmes d'information et la sécurité informatique.",  // Specialization in Information Systems and Cybersecurity.
      link: "https://example.fr/siq",
    },
    {
      title: "ISIL",
      description:
        "Spécialisation dans les systèmes d'information et les infrastructures de streaming.",  // Specialization in Information Systems and Streaming Infrastructures.
      link: "https://example.fr/isil",
    },
    {
      title: "IA",
      description:
        "Spécialisation en intelligence artificielle et apprentissage automatique.",  // Specialization in Artificial Intelligence and Machine Learning.
      link: "https://example.fr/ia",
    },
    {
      title: "GL",
      description:
        "Spécialisation dans le développement de logiciels et les technologies du web.",  // Specialization in Software Development and Web Technologies.
      link: "https://example.fr/gl",
    },
    {
      title: "TAL",
      description:
        "Spécialisation dans le traitement automatique des langues et l'intelligence artificielle.",  // Specialization in Natural Language Processing and Artificial Intelligence.
      link: "https://example.fr/tal",
    },
    {
      title: "SSI",
      description:
        "Spécialisation dans les systèmes et réseaux informatiques sécurisés.",  // Specialization in Secure Computer Systems and Networks.
      link: "https://example.fr/ssi",
    },
  ];
  