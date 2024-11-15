import { Facebook, Linkedin, Twitter } from "../icons/icons";

const Footer = () => {
  return (
    <footer className="bg-[#44444d] text-white mt-8 flex flex-row w-full px-48 py-4">
      <div className="flex flex-row ">
        <div className="">
          <img
            className="h-12 w-full"
            src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
            alt="inshorts"
          />
          <div className="ml-12">
            <span className="font-thin text-xs font_name text-[#808290]">
              <span className="font-bold text-[#fff] mr-1">Inshorts</span>
              Pte. Ltd.
            </span>
            <div className="font-thin text-xs font_name text-[#808290]">
              ©<span>COPYRIGHT 2024</span>
            </div>
          </div>
        </div>
        <div className="border-b border-[#fff] border-[1px] ml-2"></div>
        <div className=" ml-4 text-xs font_name font-thin text-[#fff]">
          <ul>
            <li>Contact Us</li>
            <li className="mt-2">
              <li>Terms & Conditions</li>
              <li>Privacy Policies</li>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row space-x-6 mt-16 ml-[43.5rem]">
        <a href="https://www.facebook.com/">
          <Facebook fill="#fff" height="32" width="32" />
        </a>
        <a href="https://twitter.com/i/flow/signup">
          <Twitter fill="#fff" height="32" width="32" />
        </a>
        <a href="https://www.linkedin.com/home">
          <Linkedin fill="#fff" height="32" width="32" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
