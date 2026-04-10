import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Martin. Tous droits réservés.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "mailto:alex.martin@email.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_oklch(0.72_0.19_195/20%)]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-1"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
