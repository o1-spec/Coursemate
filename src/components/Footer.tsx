import { Link } from "react-router-dom";

interface FooterSection {
  title: string;
  links: { name: string; path: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { name: "How it works", path: "/" },
      { name: "Use Cases", path: "/" },
    ],
  },
  {
    title: "Team",
    links: [
      { name: "About Us", path: "/" },
      { name: "Careers", path: "/" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Blog", path: "/" },
      { name: "Terms of Service", path: "/" },
      { name: "Help Center", path: "/" },
      { name: "Partnership", path: "/" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-[#1E1D61] mx-4 md:mx-auto text-white px-10">
      <div className="flex flex-col md:flex-row gap-10 md:gap-44 items-center justify-center xl:-translate-x-[42px] md:items-start py-12">
        <div>
          <h1 className="font-bold pb-8 lg:pb-0 text-[27px]">Coursemate</h1>
        </div>
        {footerSections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start"
          >
            <h6 className="font-bold pb-3 text-[22px] md:text-[18px]">
              {section.title}
            </h6>
            <div className="flex flex-col items-center md:items-start gap-1">
              {section.links.map((link, idx) => (
                <Link
                  className="text-[18px] md:text-[16px]"
                  key={idx}
                  to={link.path}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pb-4 pt-10">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()}. Coursemate
        </p>
      </div>
    </footer>
  );
}

export default Footer;
