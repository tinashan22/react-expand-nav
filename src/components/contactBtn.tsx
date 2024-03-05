import { theme } from "@/app/constants";

interface ButtonProps {
  buttonTheme: theme;
}
export default function ContactUsButton({ buttonTheme }: ButtonProps) {
  return (
    <a
      className={`
      ${
        buttonTheme === theme.dark &&
        "bg-neutral-950 text-white hover:bg-neutral-800"
      }
      ${
        buttonTheme === theme.light &&
        "bg-white text-neutral-950 hover:bg-neutral-200"
      }
      
      inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition `}
      href="/contact"
    >
      <span className="relative top-px">Contact us</span>
    </a>
  );
}
