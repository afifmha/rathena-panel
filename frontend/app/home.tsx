// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//           Welcome to Rathena Panel!
//         </h1>
//         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//           This is the home page of the Rathena Panel. Use the navigation menu to access different sections of the panel.
//         </p>
//       </main>
//     </div>
//   );
// }

// Ini adalah halaman utama (Homepage) Control Panel kamu

import { fetchStatusData, fetchServerStatus } from "@/lib/api";

export default async function Home() {
  // // --- Mengambil URL API ---
  // // const apiUrl = process.env.FAST_API_URL || "http://localhost:8000/";
  // const apiUrl = "http://localhost:8000";
  // // Debug: Pastikan URL yang digunakan benar
  // console.log("Using API URL:", apiUrl);

  // // --- FUNDAMENTAL 4: Melakukan HTTP Request ---
  // // Menggunakan 'fetch' untuk memanggil endpoint yang kita buat di FastAPI tadi
  // const res = await fetch(`${apiUrl}/api/status`, { cache: "no-store" });
  // const resServer = await fetch(`${apiUrl}/api/server-status`, {
  //   cache: "no-store",
  // });
  // // Mengubah respons mentah menjadi format JSON yang bisa dibaca Javascript
  // const data = await res.json();
  // const serverStatus = await resServer.json();

  const data = await fetchStatusData();
  const serverStatus = await fetchServerStatus();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <div className="flex flex-col md:flex-row gap-2 w-fullmax-w-7xl mx-auto mt-8">
        {/* =========================================
          KOLOM KIRI: ACCOUNT AREA (LOGIN BOX)
          ========================================= */}
        <div className="w-full md:w-[320px] bg-[#0b1120] border-t-2 border-indigo-600 rounded-xl shadow-2xl overflow-hidden shrink-0 mr-10">
          {/* Header Login Box */}
          <div className="bg-[#111827] px-6 py-4 border-b border-slate-800 flex items-center space-x-3">
            <div className="w-4 h-5 border-2 border-indigo-600 rounded-t-full rounded-b-sm"></div>
            <h2 className="text-indigo-600 font-bold tracking-widest text-sm uppercase">
              Account Area
            </h2>
          </div>

          {/* Form Login */}
          <div className="p-6 flex flex-col space-y-4">
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider mb-1 block">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-[#1e293b] border border-slate-700 text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider mb-1 block">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#1e293b] border border-slate-700 text-white rounded-md px-4 py-2 text-sm focus:outline-none focus:border-indigo-600 transition-colors"
              />
            </div>

            <button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-indigo-600 text-white font-bold py-3 rounded-md shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
              LOGIN NOW
            </button>

            <div className="flex items-center justify-center space-x-4 my-2">
              <div className="h-px bg-slate-700 flex-1"></div>
              <span className="text-xs text-slate-500">OR</span>
              <div className="h-px bg-slate-700 flex-1"></div>
            </div>

            <button className="w-full bg-transparent border border-indigo-900 hover:border-indigo-600 text-indigo-600 font-bold py-3 rounded-md transition-colors">
              REGISTER ACCOUNT
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex p-1 items-center gap-1">
              <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-xl">
                🎮
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase leading-tight">
                  Players Online
                </p>
                <p className="text-xl font-extrabold text-slate-800">
                  {serverStatus.active_players || 1000}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex p-1 items-center gap-1">
              <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-xl">
                👤
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] text-slate-500 font-bold tracking uppercase leading-tight">
                  Accounts
                </p>
                <p className="text-xl font-extrabold text-slate-800">
                  {serverStatus.total_accounts || 81239}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex p-1 items-center gap-1">
              <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-l">
                ⚔️
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] text-slate-500 font-bold tracking uppercase leading-tight">
                  Characters
                </p>
                <p className="text-xl font-extrabold text-slate-800">
                  {serverStatus.total_characters || 0}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 flex p-1 items-center gap-1">
              <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-xl">
                🏰
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase leading-tight">
                  Guilds
                </p>
                <p className="text-xl font-extrabold text-slate-800">
                  {serverStatus.total_guilds || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center space-x-4">
              {/* <div className="bg-yellow-50 text-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center text-xl">
              💰
            </div> */}
              <div>
                <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
                  Map Server
                </p>
                <p
                  className="text-xl font-extrabold text-slate-800"
                  style={{
                    color:
                      serverStatus.server_status?.map === "Online"
                        ? "green"
                        : "red",
                  }}
                >
                  {serverStatus.server_status?.map}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center space-x-4">
              <div>
                <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
                  Char Server
                </p>
                <p
                  className="text-xl font-extrabold text-slate-800"
                  style={{
                    color:
                      serverStatus.server_status?.char === "Online"
                        ? "green"
                        : "red",
                  }}
                >
                  {serverStatus.server_status?.char}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex items-center space-x-4">
              <div>
                <p className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">
                  Login Server
                </p>
                <p
                  className="text-xl font-extrabold text-slate-800"
                  style={{
                    color:
                      serverStatus.server_status?.login === "Online"
                        ? "green"
                        : "red",
                  }}
                >
                  {serverStatus.server_status?.login}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="w-full h-32 md:h-40 mt-2 rounded-xl overflow-hidden relative shadow-sm border border-slate-200">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-indigo-100 flex items-center px-8">
            <div className="absolute left-0 top-0 w-2 h-full bg-emerald-500"></div>
            <div>
              <p className="text-emerald-800/60 font-bold tracking-widest text-xs uppercase mb-1">Featured: Chapter 01 Update</p>
              <h2 className="text-3xl font-extrabold text-emerald-800 drop-shadow-sm">Song of World Tree</h2>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      {/* <h1>Dashboard rAthena</h1>
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h2>Status Komunikasi:</h2>
        <p>
          <strong>Pesan dari Backend:</strong> {data.message}
        </p>
        <p>
          <strong>Status Server:</strong>
        </p>
        <p>
          <strong>Status Login Server:</strong>{" "}
          <span
            style={{ color: serverStatus.server_status?.login === "Online" ? "green" : "red" }} >
            {serverStatus.server_status?.login}
          </span>
        </p>
        <p>
          <strong>Status Char Server:</strong>{" "}
          <span
            style={{ color: serverStatus.server_status?.char === "Online" ? "green" : "red" }} >
            {serverStatus.server_status?.char}
          </span>
        </p>
        <p>
          <strong>Status Map Server:</strong>{" "}
          <span
            style={{ color: serverStatus.server_status?.map === "Online" ? "green" : "red" }} >
            {serverStatus.server_status?.map}
          </span>
        </p>
        <p>
          <strong>Pemain Aktif:</strong> {serverStatus.active_players}
        </p>
      </div> */}

      
    </main>
  );
}

// export default function Home() {
//   return (
//     // Kita buat sebuah "Card" (Kotak putih) bergaya modern untuk menampung konten
//     <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">

//       <div className="border-b border-slate-100 pb-4 mb-6">
//         <h2 className="text-2xl font-bold text-slate-800">Dashboard Status</h2>
//         <p className="text-slate-500 mt-1">Pantau kondisi server rAthena Anda secara real-time.</p>
//       </div>

//       <div className="bg-slate-50 rounded-lg p-6 border border-slate-100 border-dashed text-center text-slate-400">
//         <p>Di sinilah nanti kita akan meletakkan komponen status Server (Login, Char, Map) dan data dari FastAPI.</p>
//       </div>

//     </div>
//   );
// }
