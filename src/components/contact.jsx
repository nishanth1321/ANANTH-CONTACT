// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import {
//   FaEnvelope,
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaWhatsapp,
//   FaGlobe,
// } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa6";

// const Contact = () => {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

//   const cities = [
//     { name: "Elampillai", contact: "8870657104" },
//     { name: "Kondalampatti", contact: "9894377104" },
//     { name: "Jalakandapuram", contact: "9994377104" },
//     { name: "Omalur", contact: "8870813104 , 8870813104" },
//     { name: "Kumarapalayam", contact: "7845876104" },
//     { name: "Dindigul", contact: "9994054104" },
//     { name: "Arani", contact: "9677768104" },
//     { name: "Yelahanka", contact: "7845930104" },
//     { name: "Bangalore", contact: "9994021104" },
//     { name: "Madanapalle", contact: "7305969104" },
//     { name: "Sathyamangalam/Sirumugai", contact: "9944655104" },
//     { name: "Karur", contact: "8870777104" },
//     { name: "Coimbatore Office", contact: "9994633104" },
//     { name: "Salem Office", contact: "9994109104" },
//   ];

//   const handleCityChange = (event) => {
//     const city = event.target.value;
//     setSelectedCity(city);

//     const cityData = cities.find((c) => c.name === city);
//     setContactNumber(cityData ? cityData.contact : "");
//   };

//   const toggleWhatsAppOptions = () => {
//     setShowWhatsAppOptions(!showWhatsAppOptions);
//   };

//   return (
//     <div className="relative w-full max-w-4xl p-6 mt-8 bg-transparent rounded-lg shadow-lg backdrop-blur-sm md:p-12">
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//         <div className="flex flex-col justify-center">
//           <label className="mb-2 text-center text-gray-700 md:text-left">
//             Select your city to contact a local representative:
//           </label>
//           <select
//             value={selectedCity}
//             onChange={handleCityChange}
//             className="p-3 border border-gray-300 rounded-md shadow-sm"
//           >
//             <option value="">-- Select City --</option>
//             {cities.map((city, index) => (
//               <option key={index} value={city.name}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-xl bg-white/80 backdrop-blur-3xl">
//           {selectedCity && (
//             <p className="mb-2 text-lg font-bold text-red-600">
//               {selectedCity}
//             </p>
//           )}
//           {contactNumber ? (
//             <>
//               <p className="text-lg text-gray-700">
//                 Contact Number:{" "}
//                 <span className="font-bold">{contactNumber}</span>
//               </p>
//               <a
//                 href={`tel:${contactNumber}`}
//                 className="flex items-center px-6 py-2 mt-4 text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600"
//               >
//                 <FaPhone className="mr-2" /> Call
//               </a>
//             </>
//           ) : (
//             <p className="text-lg text-gray-700">
//               Select a city to view the contact number.
//             </p>
//           )}
//         </div>
//       </div>

//       <div className="mt-8 text-center">
//         <h3 className="mb-4 text-gray-700">Connect with us on:</h3>
//         <div className="flex justify-center space-x-4">
//           <a
//             href="mailto:Ananthtextilesagencies@gmail.com"
//             className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
//           >
//             <FaEnvelope />
//           </a>

//           <a
//             href="https://www.instagram.com/ananth._textiles"
//             className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://m.facebook.com/61551633280255/"
//             className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaFacebookF />
//           </a>

//           <a
//             href="https://x.com/ananthtextiles?mx=2"
//             className="hidden text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaTwitter />
//           </a>

//           <div className="relative">
//             <button
//               onClick={toggleWhatsAppOptions}
//               className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125 focus:outline-none"
//             >
//               <FaWhatsapp />
//             </button>
//             {showWhatsAppOptions && (
//               <div className="absolute right-0 p-4 mb-2 space-y-2 text-sm bg-white rounded-md shadow-lg bottom-full">
//                 <a
//                   href="https://wa.me/919994109104"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block text-gray-800 hover:text-red-600"
//                 >
//                   WhatsApp: +91 99941 09104
//                 </a>
//                 <a
//                   href="https://wa.me/917845901104"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block text-gray-800 hover:text-red-600"
//                 >
//                   WhatsApp: +91 78459 01104
//                 </a>
//               </div>
//             )}
//           </div>

//           <a
//             href="https://ananthtextiles.com"
//             className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGlobe />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { saveAs } from "file-saver";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [contactNumbers, setContactNumbers] = useState([]);
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  const cities = [
    { name: "Elampillai", contact: ["8870657104", "8870662104"] },
    { name: "Kondalampatti", contact: ["9894377104", "8870507104"] },
    { name: "Jalakandapuram", contact: ["9994377104"] },
    { name: "Omalur", contact: ["8870813104", "8870813104"] },
    { name: "Kumarapalayam", contact: ["7845876104"] },
    { name: "Dindigul", contact: ["9994054104"] },
    { name: "Arani", contact: ["9677768104"] },
    { name: "Yelahanka", contact: ["7845930104"] },
    { name: "Bangalore", contact: ["9994021104"] },
    { name: "Madanapalle", contact: ["7305969104"] },
    { name: "Sathyamangalam/Sirumugai", contact: ["9944655104"] },
    { name: "Karur", contact: ["8870777104"] },
    { name: "Coimbatore Office", contact: ["9994633104"] },
    { name: "Salem Office", contact: ["9994109104"] },
  ];

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);

    const cityData = cities.find((c) => c.name === city);
    if (cityData) {
      setContactNumbers(cityData.contact);
    }
  };

  const handleSaveContact = () => {
    if (!selectedCity || contactNumbers.length === 0) return;

    // Format the vCard data based on the number of contacts
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${selectedCity};;;;
FN:${selectedCity} Representative
ORG:Ananth Textiles
${contactNumbers.map((number) => `TEL;TYPE=CELL:${number}`).join("\n")}
ADR;TYPE=WORK:;;${selectedCity}, Tamil Nadu, India;;;;
END:VCARD
    `.trim();

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    saveAs(blob, `${selectedCity}_Contact.vcf`);
  };

  const toggleWhatsAppOptions = () => {
    setShowWhatsAppOptions(!showWhatsAppOptions);
  };

  return (
    <div className="relative w-full max-w-4xl p-6 mt-8 bg-transparent rounded-lg shadow-lg backdrop-blur-sm md:p-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <label className="mb-2 text-center text-gray-700 md:text-left">
            Select your city to contact a local representative:
          </label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="">-- Select City --</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-xl bg-white/80 backdrop-blur-3xl">
          {selectedCity && (
            <p className="mb-2 text-lg font-bold text-red-600">
              {selectedCity}
            </p>
          )}
          {contactNumbers.length === 0 ? (
            <p className="text-lg text-gray-700">
              Select a city to view the contact number.
            </p>
          ) : (
            <>
              <p className="text-lg text-gray-700">
                Contact Number{contactNumbers.length > 1 ? "s" : ""}:{" "}
                <span className="font-bold">
                  {contactNumbers.join(", ")}
                </span>
              </p>
              {contactNumbers.map((number, index) => (
                <a
                  key={index}
                  href={`tel:${number.trim()}`}
                  className="flex items-center px-6 py-2 mt-4 text-white transition duration-300 ease-in-out bg-red-500 rounded-lg shadow-lg hover:bg-red-600"
                >
                  <FaPhone className="mr-2" /> Call {number}
                </a>
              ))}
              <button
                onClick={handleSaveContact}
                className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
              >
                Save Contact
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="mb-4 text-gray-700">Connect with us on:</h3>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:Ananthtextilesagencies@gmail.com"
            className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.instagram.com/ananth._textiles"
            className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://m.facebook.com/61551633280255/"
            className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <div className="relative">
            <button
              onClick={toggleWhatsAppOptions}
              className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125 focus:outline-none"
            >
              <FaWhatsapp />
            </button>
            {showWhatsAppOptions && (
              <div className="absolute right-0 p-4 mb-2 space-y-2 text-sm bg-white rounded-md shadow-lg bottom-full">
                <a
                  href="https://wa.me/919994109104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-800 hover:text-red-600"
                >
                  WhatsApp: +91 99941 09104
                </a>
                <a
                  href="https://wa.me/917845901104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-800 hover:text-red-600"
                >
                  WhatsApp: +91 78459 01104
                </a>
              </div>
            )}
          </div>

          <a
            href="https://ananthtextiles.com"
            className="text-2xl text-red-600 transition-transform duration-300 transform hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
