import "./globals.css";

export const metadata = {
  title: "Hang.ul",
  description: "Hang.ul is an interactive Korean-English Dictionary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full pt-8">
      {/*Background Gradient within Body*/}
      <body className="flex justify-center bg-gradient-to-tr from-[#E53341]/50 from-[-50%] via-white via-70% to-[#0058C6]/50 to-[110%]">
        {/*Content*/}
        <div className="xl:w-[60%] md:w-[75%] w-[90%]">
          {children}
        </div>
      </body>
    </html>
  );
}