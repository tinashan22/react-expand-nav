import { ButtonTheme } from "@/app/constants";

interface ButtonProps {
  theme: ButtonTheme;
}
export default function ContactUsButton({ theme }: ButtonProps) {
  return (
    <a
      className={`
      ${
        theme === ButtonTheme.dark &&
        "bg-neutral-950 text-white hover:bg-neutral-800"
      }
      ${
        theme === ButtonTheme.light &&
        "bg-white text-neutral-950 hover:bg-neutral-200"
      }
      
      inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition `}
      href="/contact"
    >
      <span className="relative top-px">Contact us</span>
    </a>
  );
}
