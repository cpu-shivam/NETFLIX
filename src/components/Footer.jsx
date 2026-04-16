import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-900 pt-4  md:pt-10 text-[8px] md:text-[14px]">
      <div className="w-9/12 md:w-8/12 mx-auto text-stone-400/90">
        <div className="flex justify-around ">
          <div>
            <ul>
              <li className="pt-1 md:py-2 hover:underline">Audio Description</li>
              <li className="pt-1 md:py-2 hover:underline">Investor Relations</li>
              <li className="pt-1 md:py-2 hover:underline">Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="pt-1 md:py-2 hover:underline">Help Centre</li>
              <li className="pt-1 md:py-2 hover:underline">Jobs</li>
              <li className="pt-1 md:py-2 hover:underline">Cookies Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="pt-1 md:py-2 hover:underline">Gift Cards</li>
              <li className="pt-1 md:py-2 hover:underline">Terms of Use</li>
              <li className="pt-1 md:py-2 hover:underline">Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="pt-1 md:py-2 hover:underline">Media Centre</li>
              <li className="pt-1 md:py-2 hover:underline">Privacy</li>
              <li className="pt-1 md:py-2 hover:underline">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="py-2 md:py-7 ">1997-2026 Netflix,Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
