# Ankara-bus-stop-accessibility
Interactive WebGIS application for analyzing accessibility of bus stops in Ankara. Features GPS tracking, dynamic spider-line visualization, distance filtering, and bus line search
# 🚌 Ankara Otobüs Durakları Erişilebilirliği

Ankara genelindeki (özellikle Etimesgut bölgesi) otobüs duraklarına olan yürüme mesafesini ve erişilebilirliği analiz eden, OpenLayers tabanlı interaktif bir web harita uygulamasıdır.

## 🌟 Özellikler

Bu proje, QGIS ve Web Teknolojileri kullanılarak geliştirilmiş olup aşağıdaki dinamik özellikleri içerir:

* **📍 Konum Bazlı Analiz (GPS):** Mobil cihazlarda kullanıcının anlık konumunu takip eder ve yürüme mesafesindeki durakları otomatik algılar.
* **🕷️ Dinamik Örümcek Ağı (Spider Lines):** Merkez noktadan çevre duraklara mesafeye göre renk değiştiren (Yeşil-Sarı-Kırmızı) bağlantı çizgileri çizer.
* **🎚️ Mesafe Filtresi:** Slider (sürgü) ile 100m - 2000m arasında dinamik tarama alanı ayarı.
* **🔢 Canlı Sayaç:** Kapsama alanına giren durak sayısını anlık olarak gösterir.
* **🔎 Hat Sorgulama:** Belirli bir hat numarasına (Örn: 488) göre durakları filtreleme imkanı.
* **⏸️ Sabitleme Modu (Freeze):** Harita üzerinde bir noktaya tıklayarak analizi o noktada dondurma ve inceleme özelliği.
* **🌙 Koyu Tema (Dark Mode):** Analizlerin daha net görülmesi için özelleştirilmiş koyu harita arayüzü.

## 🛠️ Kullanılan Teknolojiler

* **QGIS & QGIS2Web:** Veri hazırlığı ve temel harita çıktısı.
* **OpenLayers (v6+):** Harita kütüphanesi ve geometrik analizler.
* **HTML5 / CSS3 / JavaScript:** Arayüz, mantıksal kurgu ve GPS entegrasyonu.
* **GeoJSON / GeoCoding:** Durak verilerinin işlenmesi.

## 📱 Nasıl Kullanılır?

1.  Haritayı açın.
2.  **Masaüstünde:** Mouse'u hareket ettirerek çevredeki durakları görün.
3.  **Mobilde:** "Konumumu Takip Et" butonuna basarak yürüyüş moduna geçin.
4.  Sağ üstteki panelden mesafe ayarını değiştirin veya otobüs hattı arayın.

---
*Geliştirici: [ALİ]*
