'use client'

import React from "react";
import { Button, ButtonGroup, Link } from "@nextui-org/react";
import { GoDownload } from "react-icons/go";

interface LinkItem {
  name: string;
  hash: string;
}

const links: LinkItem[] = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
];

export default function HeaderNavbar() {
  const visibleLinks = links.filter(
    (link) => link.name !== "Home" && link.name !== "About"
  );

  return (
    <>
      <ButtonGroup color="default" variant="flat" className="hidden sm:flex">
        {links.map((link) => (
          <Button key={link.name}>
            <Link href={link.hash} className="text-white text-sm">
              {link.name}
            </Link>
          </Button>
        ))}
        <Button
          className="btn-gra"
          variant="shadow"
          endContent={<GoDownload />}
        >
          <Link
            href="jnpl-resume.pdf"
            download="jnpl-resume.pdf"
            className="text-white text-sm"
          >
            Résumé
          </Link>
        </Button>
      </ButtonGroup>
      <ButtonGroup color="default" variant="flat" className="sm:hidden">
        {visibleLinks.map((link) => (
          <Button key={link.name}>
            <Link href={link.hash} className="text-white text-sm">
              {link.name}
            </Link>
          </Button>
        ))}
        <Button
          className="btn-gra"
          variant="shadow"
          endContent={<GoDownload />}
        >
          <Link
            href="jnpl-resume.pdf"
            download="jnpl-resume.pdf"
            className="text-white text-sm"
          >
            Résumé
          </Link>
        </Button>
      </ButtonGroup>
    </>
  );
}
