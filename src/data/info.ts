export type InfoKey = 'sightseeing' | 'quality' | 'care' | 'installation' | 'sustainability' | 'teak' | 'payment' | 'shipping';

export const infoContent: Record<InfoKey, { title_en: string; title_id: string; sub_en: string; sub_id: string; body_en: string; body_id: string }> = {
  sightseeing: {
    title_en: 'Sightseeing',
    title_id: 'Kunjungan',
    sub_en: 'Visit our workshop',
    sub_id: 'Kunjungi workshop kami',
    body_en: `<p>Want to see the craft firsthand? We welcome buyers and partners to visit our workshop in Indonesia — by appointment only.</p>
<div class="info-highlight">📍 Jepara, Central Java, Indonesia — the heart of Indonesian wood craftsmanship.</div>
<p>Seeing is believing. Touch the grain, smell the teak, and watch our artisans at work before you commit to a bulk order.</p>`,
    body_id: `<p>Ingin melihat langsung proses pembuatannya? Kami menyambut pembeli dan mitra untuk mengunjungi workshop kami di Indonesia — hanya dengan perjanjian terlebih dahulu.</p>
<div class="info-highlight">📍 Jepara, Jawa Tengah, Indonesia — pusat kerajinan kayu Indonesia.</div>
<p>Melihat lebih meyakinkan dari sekadar membaca. Rasakan seratnya dan saksikan pengrajin kami bekerja sebelum Anda memutuskan order partai.</p>`,
  },
  quality: {
    title_en: 'Quality',
    title_id: 'Kualitas',
    sub_en: 'Uncompromising standards',
    sub_id: 'Standar tanpa kompromi',
    body_en: `<p>Every piece undergoes multi-stage quality control. We inspect for structural integrity, surface finish, joint tightness, and dimensional accuracy before packaging.</p>
<div class="info-highlight">✦ Grade A teak · Hand-finished · Individually inspected before shipping</div>
<p>For wholesale orders, we provide a photo and video inspection report before container loading, so you can verify quality before it ships.</p>`,
    body_id: `<p>Setiap produk melalui quality control berlapis. Kami memeriksa kekuatan struktur, kualitas permukaan, kerataan sambungan, dan akurasi dimensi sebelum dikemas.</p>
<div class="info-highlight">✦ Kayu jati Grade A · Finishing tangan · Diperiksa satu per satu sebelum pengiriman</div>
<p>Untuk pesanan grosir, kami menyediakan laporan foto dan video sebelum pemuatan kontainer agar Anda bisa verifikasi kualitas sebelum barang dikirim.</p>`,
  },
  care: {
    title_en: 'Care',
    title_id: 'Perawatan',
    sub_en: 'Keep it beautiful for decades',
    sub_id: 'Jaga keindahannya selama puluhan tahun',
    body_en: `<p>Teak is naturally oil-rich and highly resistant to moisture. Simply wipe with a damp cloth for daily care. Avoid prolonged exposure to standing water.</p>
<div class="info-highlight">Tip: Apply teak oil once or twice per year to maintain the warm golden hue. Without treatment, teak naturally weathers to a distinguished silver-grey.</div>
<p>For bathroom pieces, ensure adequate ventilation. Avoid harsh chemical cleaners — a mild soap solution is always sufficient.</p>`,
    body_id: `<p>Kayu jati kaya minyak alami dan sangat tahan terhadap lembab. Cukup lap dengan kain lembab untuk perawatan sehari-hari. Hindari genangan air dalam waktu lama.</p>
<div class="info-highlight">Tips: Oleskan minyak jati satu atau dua kali setahun untuk menjaga warna emas yang hangat. Tanpa perawatan, jati akan alami berubah menjadi abu-abu elegan.</div>
<p>Untuk produk kamar mandi, pastikan ventilasi yang cukup. Hindari pembersih kimia keras — larutan sabun ringan sudah cukup.</p>`,
  },
  installation: {
    title_en: 'Installation',
    title_id: 'Instalasi',
    sub_en: 'Arrives ready to use',
    sub_id: 'Tiba siap dipakai',
    body_en: `<p>All our pieces are <strong>fully assembled</strong> and require no on-site construction. Simply unpack, position, and connect plumbing for bathroom pieces.</p>
<div class="info-highlight">Each unit ships with a care guide and, for washbasins, basic plumbing connection instructions.</div>
<p>For wholesale buyers, we offer assembly service coordination at destination port upon request.</p>`,
    body_id: `<p>Semua produk kami sudah <strong>dirakit sepenuhnya</strong> dan tidak memerlukan konstruksi di tempat. Cukup unpack, posisikan, dan sambungkan plumbing untuk produk kamar mandi.</p>
<div class="info-highlight">Setiap unit disertai panduan perawatan dan, untuk wastafel, instruksi dasar sambungan pipa.</div>
<p>Untuk pembeli grosir, kami menawarkan koordinasi layanan perakitan di pelabuhan tujuan atas permintaan.</p>`,
  },
  sustainability: {
    title_en: 'Sustainability',
    title_id: 'Keberlanjutan',
    sub_en: 'Forest-friendly since day one',
    sub_id: 'Ramah hutan sejak hari pertama',
    body_en: `<p>We source teak <strong>exclusively</strong> from state-supervised Indonesian plantations that are actively reforested. No old-growth timber, ever.</p>
<div class="info-highlight">✦ Indonesian Legal Wood certified · Replanted after every harvest · Zero old-growth sourcing</div>
<p>Wood offcuts are repurposed into smaller accessories rather than discarded — because we believe nothing from the tree should go to waste.</p>`,
    body_id: `<p>Kami hanya mengambil kayu jati dari perkebunan yang <strong>diawasi negara</strong> dan aktif dihutankan kembali. Tidak pernah dari hutan tua.</p>
<div class="info-highlight">✦ Bersertifikat Indonesian Legal Wood · Ditanam ulang setelah panen · Zero kayu hutan tua</div>
<p>Sisa potongan kayu dimanfaatkan untuk aksesori yang lebih kecil — karena kami percaya tidak ada yang harus terbuang dari pohon.</p>`,
  },
  teak: {
    title_en: 'Teak Wood',
    title_id: 'Kayu Jati',
    sub_en: 'The king of tropical hardwoods',
    sub_id: 'Raja kayu keras tropis',
    body_en: `<p>Indonesian teak (Tectona grandis) is world-renowned for its exceptional durability, natural oil content, and beautiful grain. It resists water, rot, and insects naturally.</p>
<div class="info-highlight">Hardness: 1155 lbf (Janka) · Natural oils repel moisture · Lifespan: 50–75 years with care</div>
<p>Each piece has a unique grain pattern — swirls, knots, and colour variations are natural characteristics, not defects. They are proof that your piece is truly one of a kind.</p>`,
    body_id: `<p>Jati Indonesia (Tectona grandis) terkenal di dunia karena ketahanannya, kandungan minyak alami, dan corak serat yang indah. Secara alami tahan terhadap air, busuk, dan serangga.</p>
<div class="info-highlight">Kekerasan: 1155 lbf (Janka) · Minyak alami menolak lembab · Usia pakai: 50–75 tahun dengan perawatan</div>
<p>Setiap karya memiliki pola serat yang unik — pusaran, simpul, dan variasi warna adalah karakteristik alami, bukan cacat. Itu bukti karya Anda benar-benar satu-satunya.</p>`,
  },
  payment: {
    title_en: 'Payment Methods',
    title_id: 'Metode Pembayaran',
    sub_en: 'Flexible, personal, no gateway',
    sub_id: 'Fleksibel, personal, tanpa gateway',
    body_en: `<p>We do not use online payment gateways. All transactions are arranged <strong>directly and personally</strong> between you and our team after you enquire about a product.</p>
<div class="info-highlight">Accepted: Bank transfer (TT / Wire) · Letter of Credit (LC) for large orders · Cash on visit</div>
<p>For retail buyers, a 50% deposit confirms your order. The balance is paid before shipping. For wholesale (container) orders, we follow standard trade terms (30/70 or LC at sight).</p>
<p>Price negotiation is always open — especially for bulk orders. Contact us and we'll work out the best terms together.</p>`,
    body_id: `<p>Kami tidak menggunakan payment gateway online. Semua transaksi diatur secara <strong>langsung dan personal</strong> antara Anda dan tim kami setelah Anda mengirimkan inquiry.</p>
<div class="info-highlight">Diterima: Transfer bank (TT / Wire) · Letter of Credit (LC) untuk order besar · Tunai saat kunjungan</div>
<p>Untuk pembeli retail, deposit 50% mengonfirmasi pesanan Anda. Sisa dibayar sebelum pengiriman. Untuk grosir, berlaku syarat perdagangan standar (30/70 atau LC at sight).</p>
<p>Negosiasi harga selalu terbuka — terutama untuk order partai. Hubungi kami dan kami akan temukan syarat terbaik bersama.</p>`,
  },
  shipping: {
    title_en: 'Shipping Methods',
    title_id: 'Metode Pengiriman',
    sub_en: 'Sea freight — worldwide delivery',
    sub_id: 'Pengiriman laut — ke seluruh dunia',
    body_en: `<p>All orders are shipped via <strong>sea container freight</strong> from the port of Semarang or Surabaya, Indonesia. We accommodate both single-piece retail orders packed in export crates and full/half container wholesale orders.</p>
<div class="info-highlight">🚢 FCL (Full Container Load) · LCL (Less than Container Load) for smaller orders · Export crating included</div>
<p>Estimated transit times vary by destination: 18–25 days to Europe, 20–30 days to the Americas, 7–14 days within Asia.</p>
<p>We handle all export documentation, phytosanitary certificates, and customs paperwork. You receive full tracking and a packing list before departure.</p>`,
    body_id: `<p>Semua pesanan dikirim melalui <strong>kontainer laut</strong> dari Pelabuhan Semarang atau Surabaya, Indonesia. Kami menangani retail (peti ekspor) dan grosir (FCL/LCL kontainer).</p>
<div class="info-highlight">🚢 FCL (Full Container Load) · LCL (Less than Container Load) · Peti ekspor termasuk</div>
<p>Estimasi transit: 18–25 hari ke Eropa, 20–30 hari ke Amerika, 7–14 hari di dalam Asia.</p>
<p>Kami mengurus semua dokumen ekspor, sertifikat fitosanitasi, dan dokumen bea cukai. Tracking lengkap diberikan sebelum kapal berangkat.</p>`,
  },
};
