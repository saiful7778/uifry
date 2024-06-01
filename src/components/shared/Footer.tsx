import SiteLogo from "../SiteLogo";
import { Mail, Phone } from "lucide-react";
import jsonData from "@/lib/data.json";
import Link from "next/link";
import SubscribeForm from "../Forms/SubscribeForm";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="container mt-36">
      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <div className="space-y-4">
          <SiteLogo />
          <div className="flex items-center gap-2">
            <span className="text-primary">
              <Mail />
            </span>
            <span className="font-medium">{jsonData.footer.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">
              <Phone />
            </span>
            <span className="font-medium">{jsonData.footer.phone}</span>
          </div>
        </div>
        {jsonData.footer.linkList.map((ele, idx) => (
          <div className="space-y-4" key={"footer-link-list-" + idx}>
            <h5 className="text-3xl font-medium">{ele.title}</h5>
            <ul>
              {ele.links.map((link, idx) => (
                <li key={"footer-link-list-link-" + idx}>
                  <Link
                    className="font-medium hover:underline"
                    href={link.path}
                  >
                    {link.linkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-4">
          <h5 className="text-3xl font-medium">Newsletter</h5>
          <div className="font-medium">Stay up to date</div>
          <SubscribeForm />
        </div>
      </div>
      <div className="my-10 h-[1px] bg-details"></div>
      <div className="text-center">
        Copyright {date.getFullYear()} uifry.com all rights reserved
      </div>
    </footer>
  );
}
