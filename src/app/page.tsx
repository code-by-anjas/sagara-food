import Image from "next/image";

export default function Menu() {
  return (
    <div className='max-w-[480px] mx-auto flex flex-col gap-0.5'>
      <Image
        src='/1.png'
        alt='Menu 1'
        width={1000}
        height={1500}
        className='w-full h-auto rounded-sm'
        priority
      />

      <Image
        src='/2.png'
        alt='Menu 2'
        width={1000}
        height={720}
        className='w-full h-auto rounded-sm'
      />

      <div className='w-full rounded-sm h-[690px] font-poppins bg-[#fff4e1] relative flex flex-col items-center text-center px-6 pt-10'>
        {/* Text Section */}
        <h2 className='text-4xl font-bold text-slate-900'>Mau Pesen? 😋</h2>

        <p className='text-slate-700 mt-2 text-lg'>
          Langsung klik tombol di bawah yaa~
        </p>

        {/* WhatsApp Button */}
        <a
          href='https://wa.me/62895337569919?text=Halo%20Mama%20Saga,%20%20mau%20pesen%20dong!'
          target='_blank'
          className='mt-6 w-full bg-green-500 text-white py-3 rounded-xl font-semibold text-lg shadow-md active:scale-[0.97] transition-all'
        >
          Pesan via WhatsApp
        </a>

        {/* Decorative Shape / Maskot Image */}
        <Image
          src='/sagara_1.png'
          alt='Sagara 1'
          width={540}
          height={720}
          className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] max-w-[70%] h-auto'
        />
      </div>
    </div>
  );
}
