const defaultEvents = [
    {
        id: 1,
        name: "UNAI National Youth SDG Summit 2026",
        category: "Konferensi",
        date: "2026-08-15",
        location: "Jakarta Convention Center & Online",
        pic: "Sarah Wijaya",
        status: "Mendatang",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
        description: "Konferensi pemuda nasional terbesar untuk membahas pencapaian Sustainable Development Goals (SDGs) di Indonesia menjelang tahun 2030. Menghadirkan pembicara terkemuka dari PBB, kementerian, dan aktivis muda."
    },
    {
        id: 2,
        name: "Diplomacy & Public Speaking Workshop",
        category: "Pelatihan",
        date: "2026-09-02",
        location: "Zoom Meeting (Virtual)",
        pic: "Michael Pratama",
        status: "Mendatang",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
        description: "Pelatihan intensif seni bernegosiasi, teknik negosiasi ala Perserikatan Bangsa-Bangsa, dan cara menyusun resolusi yang efektif untuk delegasi muda."
    },
    {
        id: 3,
        name: "Climate Action Campaign: Mangrove Planting",
        category: "Aksi Sosial",
        date: "2026-07-20",
        location: "Pantai Indah Kapuk, Jakarta",
        pic: "Rizky Ramadhan",
        status: "Berlangsung",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
        description: "Aksi nyata pelestarian lingkungan pesisir laut melalui penanaman 1.000 bibit mangrove bersama relawan muda UNA Indonesia dan masyarakat lokal."
    },
    {
        id: 4,
        name: "Human Rights Policy Discussion & Seminar",
        category: "Diskusi",
        date: "2026-06-10",
        location: "Auditorium FISIP UI, Depok",
        pic: "Dewi Lestari",
        status: "Selesai",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
        description: "Diskusi publik mendalam mengenai implementasi hak asasi manusia di era digital serta perlindungan privasi data pribadi warga negara."
    }
];

if (!localStorage.getItem('unai_events')) {
    localStorage.setItem('unai_events', JSON.stringify(defaultEvents));
}

if (!localStorage.getItem('unai_registrations')) {
    localStorage.setItem('unai_registrations', JSON.stringify([
        { id: 101, eventId: 1, name: "Andi Saputra", email: "andi@gmail.com", phone: "08123456789", motivation: "Ingin berkontribusi pada isu SDGs.", date: "2026-06-01" },
        { id: 102, eventId: 2, name: "Siti Rahma", email: "siti@yahoo.com", phone: "08987654321", motivation: "Mengasah kemampuan public speaking.", date: "2026-06-02" }
    ]));
}

function toggleMobileMenu() {
    const links = document.querySelector('.nav-links');
    if(links) links.classList.toggle('active');
}

function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        if (key) params[key] = decodeURIComponent(value || '');
    });
    return params;
}
