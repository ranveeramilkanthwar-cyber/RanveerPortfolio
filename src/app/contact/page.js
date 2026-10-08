import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact — Hire Ranveer, Creative Developer & UI Engineer",
  description: "Get in touch with Ranveer to hire a freelance Creative Developer and UI Engineer. Available for projects worldwide.",
  keywords:    ["hire creative developer", "hire ui engineer", "hire game developer", "freelance contact", "get quote website design"],
  alternates:  { canonical: "https://ranveer.dev/contact" },
  openGraph: {
    title: "Hire Ranveer — Creative Developer & UI Engineer",
    description: "Contact Ranveer for freelance creative development, 3D games, and web app projects. Available worldwide.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
