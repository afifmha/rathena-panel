// const apiUrl = process.env.FAST_API_URL || "http://localhost:8000";
const apiUrl = "http://localhost:8000";

// Fungsi untuk mengambil data players/accounts
export async function fetchStatusData() {
  console.log("Fetching Status API dari:", apiUrl);
  try {
    const res = await fetch(`${apiUrl}/api/status`, { cache: "no-store" });
    if (!res.ok) throw new Error("Gagal mengambil data status");
    
    // Ini menggantikan: const data = await res.json();
    return await res.json(); 
  } catch (error) {
    console.error("Error di fetchStatusData:", error);
    return {}; // Kembalikan object kosong jika error
  }
}

// Fungsi untuk mengambil status server map/char/login
export async function fetchServerStatus() {
  console.log("Fetching Server Status API dari:", apiUrl);
  try {
    const resServer = await fetch(`${apiUrl}/api/server-status`, { cache: "no-store" });
    if (!resServer.ok) throw new Error("Gagal mengambil status server");
    
    // Ini menggantikan: const serverStatus = await resServer.json();
    return await resServer.json();
  } catch (error) {
    console.error("Error di fetchServerStatus:", error);
    return {}; // Kembalikan object kosong jika error
  }
}