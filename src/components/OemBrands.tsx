import Image from "next/image";

const DUMMY_OEM_BRANDS: string[] = [
  "https://s3-alpha-sig.figma.com/img/3e72/c00a/ae64f5078de9b2e5756746ad6acf71b4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lP9a-V3G0VVcZDKkqvlPLN4Q8Tl7dwVgtj4PO~dwPUtgBH87IsVdDkNNqYYaxLalZu2zXblUnkMnJWALky4rsS7TtM4biJB0aDXLyruePHlgvD8f9qqp0XNvrH8W-XHOkSxeP02Dz4OQl4NoE9oepwCMDQ9BF69ZVXfQZ-yYrwbAuagTu0g04eQrWsPghg0x-yyfRlEeRO2IFrfZha5r6bB3NbZueEpBiVFww94W~urD5o1LahPCRGuxGDWUEGR70Sav3rAVDVxn08psBEXJwSgTneIJjouGaX-Q5PXOEydkOAbk2Lwczw3wDo4M2xBvpEWKqo~L3Q0mxn0vsVmGng__",
  "https://s3-alpha-sig.figma.com/img/3e72/c00a/ae64f5078de9b2e5756746ad6acf71b4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lP9a-V3G0VVcZDKkqvlPLN4Q8Tl7dwVgtj4PO~dwPUtgBH87IsVdDkNNqYYaxLalZu2zXblUnkMnJWALky4rsS7TtM4biJB0aDXLyruePHlgvD8f9qqp0XNvrH8W-XHOkSxeP02Dz4OQl4NoE9oepwCMDQ9BF69ZVXfQZ-yYrwbAuagTu0g04eQrWsPghg0x-yyfRlEeRO2IFrfZha5r6bB3NbZueEpBiVFww94W~urD5o1LahPCRGuxGDWUEGR70Sav3rAVDVxn08psBEXJwSgTneIJjouGaX-Q5PXOEydkOAbk2Lwczw3wDo4M2xBvpEWKqo~L3Q0mxn0vsVmGng__",
  "https://s3-alpha-sig.figma.com/img/3e72/c00a/ae64f5078de9b2e5756746ad6acf71b4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lP9a-V3G0VVcZDKkqvlPLN4Q8Tl7dwVgtj4PO~dwPUtgBH87IsVdDkNNqYYaxLalZu2zXblUnkMnJWALky4rsS7TtM4biJB0aDXLyruePHlgvD8f9qqp0XNvrH8W-XHOkSxeP02Dz4OQl4NoE9oepwCMDQ9BF69ZVXfQZ-yYrwbAuagTu0g04eQrWsPghg0x-yyfRlEeRO2IFrfZha5r6bB3NbZueEpBiVFww94W~urD5o1LahPCRGuxGDWUEGR70Sav3rAVDVxn08psBEXJwSgTneIJjouGaX-Q5PXOEydkOAbk2Lwczw3wDo4M2xBvpEWKqo~L3Q0mxn0vsVmGng__",
  "https://s3-alpha-sig.figma.com/img/3e72/c00a/ae64f5078de9b2e5756746ad6acf71b4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lP9a-V3G0VVcZDKkqvlPLN4Q8Tl7dwVgtj4PO~dwPUtgBH87IsVdDkNNqYYaxLalZu2zXblUnkMnJWALky4rsS7TtM4biJB0aDXLyruePHlgvD8f9qqp0XNvrH8W-XHOkSxeP02Dz4OQl4NoE9oepwCMDQ9BF69ZVXfQZ-yYrwbAuagTu0g04eQrWsPghg0x-yyfRlEeRO2IFrfZha5r6bB3NbZueEpBiVFww94W~urD5o1LahPCRGuxGDWUEGR70Sav3rAVDVxn08psBEXJwSgTneIJjouGaX-Q5PXOEydkOAbk2Lwczw3wDo4M2xBvpEWKqo~L3Q0mxn0vsVmGng__",
];

const OemBrands = () => {
  return (
    <>
      <div className="text-[#627087] text-base font-semibold mt-5 mb-3">
        OEM Brands
      </div>
      <div className="grid grid-cols-4 justify-between w-full flex-wrap gap-5">
        {DUMMY_OEM_BRANDS.map((brand, i) => (
          <div
            key={i}
            className="bg-[lightgray] min-h-[60px] w-[60px] min-w-[60px] relative rounded-[12px]"
          >
            <Image src={brand} alt={brand} layout="fill" />
          </div>
        ))}
      </div>
    </>
  );
};

export default OemBrands;
