import React from "react";
import { saveAs } from "file-saver";
import founder from "../assets/founder.jpg";

const Founder = () => {
  const handleSaveContact = () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Sivakumar;A T R;;;
FN:A T R Sivakumar
ORG:Ananth Textiles
TITLE:Founder & CEO
TEL;TYPE=CELL:+919566875780
EMAIL:ananthtextiles.veerakeralam@gmail.com
ADR;TYPE=WORK:;;Veerakeralam, Coimbatore, Tamil Nadu, India;;;;
END:VCARD
    `.trim();

    // Create a blob with UTF-8 encoding and the correct MIME type
    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    saveAs(blob, "ATR_Sivakumar_Contact.vcf");
  };

  return (
    <div>
      <div className="relative w-full max-w-4xl p-6 bg-transparent rounded-lg shadow-lg h-[80%] backdrop-blur-sm md:p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src={founder}
              alt="A T R Sivakumar"
              className="object-contain rounded-lg w-72 h-82"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="mb-2 text-3xl font-extrabold tracking-wider text-center text-red-600 md:text-left">
              A T R Sivakumar
            </h1>

            <div className="mb-4 text-center text-gray-800 md:text-left">
              <p className="text-lg text-red-600">
                Founder & CEO - Ananth Textiles Agencies
              </p>
            </div>
            <p className="mx-auto text-lg text-justify text-gray-800 md:text-left">
              Since 1987, A T R Sivakumar has been the driving force behind its
              growth and success in the textile industry. His vision and
              commitment to quality have transformed Ananth Textiles Agencies
              into a well-regarded wholesaler. Under his leadership, Ananth
              Textiles Agencies continues to uphold its reputation for
              excellence, adapting to the evolving needs of customers while
              maintaining a strong foundation of trust and integrity.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-4 lg:justify-end">
          <button
            onClick={handleSaveContact}
            className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Founder;
